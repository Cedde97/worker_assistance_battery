import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ProductPiece } from '../models/ProductPiece';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import {
  NgxScannerQrcodeComponent,
  ScannerQRCodeConfig,
  ScannerQRCodeResult,
} from 'ngx-scanner-qrcode';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  barcodes: Barcode[] = [];
  isDesktop = false;
  isDesktopScanning = false;
  scannedResults: String[] = [];
  isScanning = false;

  image_path: string = "";
  empty_product: string = '{"id": "", "serial_number": "", "supplier_number": "", "production_date": ""}'
  current_product:ProductPiece = new ProductPiece(JSON.parse(this.empty_product));

  screenHeight = window.innerHeight;
  screenWidth = window.innerWidth;

  constructor(
    private alertController: AlertController,
    private translate: TranslateService
  ) {
  }

  @ViewChild('action') action!: NgxScannerQrcodeComponent;

  ngOnInit() {
    if (!this.isMobile()) {
      this.isDesktop = true;
    }
  }

  /////////////////////////////////////////////////
  // qr-scanner mobile
  ////////////////////////////////////////////////
  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: this.translate.instant('PERMISSION_DENIED'),
      message: this.translate.instant('PLEASE_GRANT_CAMERA_PERMISSION'),
      buttons: [this.translate.instant('OK')],
    });
    await alert.present();
  }

  async scan_mobile(): Promise<void> {
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert();
      return;
    }
    const { barcodes } = await BarcodeScanner.scan();
    this.barcodes.push(...barcodes);

    this.show_scanned_product_information(barcodes[0].displayValue)
  }

  /////////////////////////////////////////////////
  // qr-scanner desktop
  ////////////////////////////////////////////////
  public onEvent(e: ScannerQRCodeResult[], action?: any): void {
    this.scannedResults.push(e[0].value);
    action["stop"]().subscribe((r: any) => console.log("stop", r), alert);
    this.show_scanned_product_information(e[0].value)
  }

  public scan_desktop(action: any, fn: string) {
    const playDeviceFacingBack = (devices: any[]) => {
      // front camera or back camera check here!
      const device = devices.find(f => (/environment|back|rear/gi.test(f.label))); // Default Back Facing Camera
      action.playDevice(device ? device.deviceId : devices[0].deviceId);
    }

    if (fn === 'start') {
      action[fn](playDeviceFacingBack).subscribe((r: any) => console.log(fn, r), alert);
    } else {
      action[fn]().subscribe((r: any) => console.log(fn, r), alert);
    }
  }

  /////////////////////////////////////////////////
  // common functions:
  ////////////////////////////////////////////////
  // function to start scanning process
  // distinguishes between mobile and desktop:
  async scan(action: any, fn: string): Promise<void> {
    if (!this.isDesktop){ // mobile
      this.scan_mobile()
    } else { // desktop
      this.scan_desktop(action, fn)
    }
  }

  private isMobile() {
    // const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    const mobile_array = ["Mobi", "Android", "webOS", "iPhone", "iPad", "iPod", "BlackBerry", "IEMobile", "Opera Mini"]
    console.log(navigator.userAgent)
    for (let system of mobile_array) {
      if (navigator.userAgent.includes(system)){
          return true;
      }
    }
    return false;
  }

  private show_scanned_product_information(product_code: string){
    this.current_product = new ProductPiece(JSON.parse(product_code))
    this.image_path = this.current_product.img_path;
  }
}
