import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductPiece } from '../models/ProductPiece';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import {
  NgxScannerQrcodeComponent,
  ScannerQRCodeConfig,
  ScannerQRCodeResult,
} from 'ngx-scanner-qrcode';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  isSupported = false;
  barcodes: Barcode[] = [];
  isDesktop = false;
  isDesktopScanning = false;
  scannedResults: String[] = [];
  isScanning = false;

  image_path: string = "";
  empty_product: string = '{"id": "", "serial_number": "", "supplier_number": "", "production_date": ""}'
  current_product:ProductPiece = new ProductPiece(JSON.parse(this.empty_product));

  constructor(private alertController: AlertController) {}

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
      header: 'Permission denied',
      message: 'Please grant camera permission to use the barcode scanner.',
      buttons: ['OK'],
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
    // action["start"]().subscribe((r: any) => console.log("start", r), alert);
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
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
  }
  
  private show_scanned_product_information(product_code: string){
    this.current_product = new ProductPiece(JSON.parse(product_code))
    this.image_path = this.current_product.img_path;
  }

}
