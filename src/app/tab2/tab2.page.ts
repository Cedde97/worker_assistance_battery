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
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  isSupported = false;
  barcodes: Barcode[] = [];
  isDesktop = false;
  isDesktopScanning = false;
  scannedResults: String[] = [];
  image_path = "";
  image_description = "";
  isSuccessToastOpen = false;
  isFailureToastOpen = false;
  

  // bauanleitung steps: 
  first_step = false
  second_step = false

  current_process: String = "";
  current_product_piece: String = "";

  @ViewChild('action') action!: NgxScannerQrcodeComponent;

  constructor(private alertController: AlertController) {}

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

    this.check_production_piece(barcodes[0].displayValue)
}

  /////////////////////////////////////////////////
  // qr-scanner desktop
  ////////////////////////////////////////////////
  public onEvent(e: ScannerQRCodeResult[], action?: any): void {   
    this.scannedResults.push(e[0].value);
    action["stop"]().subscribe((r: any) => console.log("stop", r), alert);

    this.check_production_piece(e[0].value)
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

  private change_product_information(product_code: string):void {
    if(product_code == "green"){
      this.image_path = "../../assets/product_pictures/green.jpeg";
    }
    else if (product_code == "orange"){
      this.image_path = "../../assets/product_pictures/orange.jpeg";
    }
  }

  private isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
  }

  public display_success_toast(isOpen: boolean){
    this.isSuccessToastOpen = isOpen;
  }

  public display_failure_toast(isOpen: boolean){
    this.isFailureToastOpen = isOpen;
  }

  /////////////////////////////////////////////////
  // Starte Zusammenbau:
  ////////////////////////////////////////////////

  public startProduction(){
    this.first_step = true
    this.image_path = "../../assets/product_pictures/green.jpeg";
  }

  async build_instruction(step: Number, action: any, fn: string){
    switch (step){
      case 1:
        this.current_process = "step 1"
        this.current_product_piece = "green"
        break;
      case 2:
        this.current_process = "step 2"
        this.current_product_piece = "orange"
        break;
    }

    await this.scan(action, fn)
  }

  private check_production_piece(product_code: string){
    // main logik    
    if(product_code == this.current_product_piece){
      this.display_success_toast(true)
      this.change_product_information(product_code)
      this.second_step = true
    } else {
      this.display_failure_toast(true)
    }
  }

}