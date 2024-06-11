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

  json_data_green = '{"id": "1", "serial_number": "000000000001", "supplier_number": "000000000001", "production_date": "2024-05-13 12:00:00", "description": "lorem ipsum grün"}';
  json_data_orange = '{"id": "2", "serial_number": "000000000002", "supplier_number": "000000000002", "production_date": "2024-05-14 13:00:00", "description": "lorem ipsum orange"}';
  
  desktop_scanner_style = "width: 0px; height: 0px;"
  
  
  constructor(private alertController: AlertController) {}

  @ViewChild('action') action!: NgxScannerQrcodeComponent;

  ngOnInit() {
    //this.test_from_json()
    if (!this.isMobile()) {
      this.isDesktop = true;
    }
  }

  public test_from_json(){
    let jsonString = '{"id": "1", "serial_number": "000000000001", "supplier_number": "000000000001", "production_date": "2024-05-13 12:00:00"}';
    let product_piece = new ProductPiece(JSON.parse(jsonString));
    console.log(product_piece.id); 
    console.log(product_piece.serial_number); 
    console.log(product_piece.supplier_number); 
    console.log(product_piece.production_date); 
  }

  public show_product_information(){
    if(this.current_product.id == null || this.current_product.id == 2){
      this.show_green_product_information()
    } else {
      this.show_orange_product_information()
    }
  }

  public show_green_product_information(){
      this.current_product = new ProductPiece(JSON.parse(this.json_data_green));
      this.image_path = "../assets/product_pictures/green.jpeg"
  }

  public show_orange_product_information(){
    this.current_product = new ProductPiece(JSON.parse(this.json_data_orange));
    this.image_path = "../assets/product_pictures/orange.jpeg"
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
    this.desktop_scanner_style = "width: 200px; height: 200px"
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
  
  private show_scanned_product_information(product_code: string){
    // main logik    
    if(product_code == "1" || product_code == "green"){
      this.show_green_product_information()
    } else if (product_code == "2" || product_code == "orange") {
      this.show_orange_product_information()
    }

    this.desktop_scanner_style = "width: 0px; height: 0px"
  }

}
