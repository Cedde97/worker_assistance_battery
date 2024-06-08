import { Component, OnInit, ViewChild } from '@angular/core';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';
import {
  ScannerQRCodeConfig,
  ScannerQRCodeResult,
  NgxScannerQrcodeService,
  NgxScannerQrcodeComponent,
  ScannerQRCodeSelectedFiles,
} from 'ngx-scanner-qrcode';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  isSupported = false;
  barcodes: Barcode[] = [];
  isDesktop = false;
  isDesktopScanning = false;
  scannedResults: String[] = [];
  image_path = "../../assets/product_pictures/green.jpeg";
  image_description = "lorem ipsum, put se drecksteil zusammen 1,2,3"


  public config: ScannerQRCodeConfig = {
    constraints: {
      video: {
        width: window.innerWidth
      },
    },
  };

  @ViewChild('action') action!: NgxScannerQrcodeComponent;
  
  constructor(private alertController: AlertController) {}

  ngOnInit() {
    if (!this.isMobile()) {
      this.isDesktop = true;
    }
  }

  // function to start scanning process
  // distinguishes between mobile and desktop:
  async scan(action: any, fn: string): Promise<void> {
    if (!this.isDesktop){ // mobile
      const granted = await this.requestPermissions();
      if (!granted) {
        this.presentAlert();
        return;
      }
      const { barcodes } = await BarcodeScanner.scan();
      this.barcodes.push(...barcodes);
      this.change_product_information(barcodes[0].displayValue)

    } else { // desktop
      this.isDesktopScanning = true;
      this.handle(action, fn) 
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

  /////////////////////////////////////////////////
  // qr-scanner desktop
  ////////////////////////////////////////////////
  public onEvent(e: ScannerQRCodeResult[], action?: any): void {
    console.log(e);
    
    this.scannedResults.push(e[0].value);
    action["stop"]().subscribe((r: any) => console.log("stop", r), alert);

    this.change_product_information(e[0].value)
  }
  
  public handle(action: any, fn: string): void {
    const playDeviceFacingBack = (devices: any[]) => {
      // front camera or back camera check here!
      const device = devices.find(f => (/environment|back|rear/gi.test(f.label))); // Default Back Facing Camera
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
  private change_product_information(product_code: string):void {
    if(product_code == "green"){
      this.image_path = "../../assets/product_pictures/green.jpeg";
      this.image_description = "lorem ipsum, put se green drecksteil zusammen 1,2,3"
    }
    else if (product_code == "orange"){
      this.image_path = "../../assets/product_pictures/orange.jpeg";
      this.image_description = "lorem ipsum, put se orange drecksteil zusammen 1,2,3"
    }
  }

  private isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
  }
}