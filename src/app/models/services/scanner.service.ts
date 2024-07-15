import { Injectable } from '@angular/core';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';
import { ScannerQRCodeResult } from 'ngx-scanner-qrcode';
import { Tab2Page } from '../../tab2/tab2.page';

@Injectable({
  providedIn: 'root'
})
export class ScannerService {

  constructor(private alertController: AlertController) {}

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

  async scan_mobile(barcodes: Barcode[], check_production_piece: (value: string) => void): Promise<void> {
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert();
      return;
    }
    const { barcodes: newBarcodes } = await BarcodeScanner.scan();
    barcodes.push(...newBarcodes);

    check_production_piece(newBarcodes[0].displayValue);
  }

  /*
  onEvent(e: ScannerQRCodeResult[], action?: any, callingComponent?: any): void {
    if (callingComponent instanceof Tab2Page) {
      this.onEventTab2(e, action);
      component.scannedResults.push(e[0].value);
    action["stop"]().subscribe((r: any) => console.log("stop", r), alert);

    component.check_production_piece(e[0].value);
    } else if (callingComponent instanceof Tab3Page) {
      this.onEventTab3(e, action);
    } else {
      console.log("Unknown calling component");
    }
  }

  onEvent(e: ScannerQRCodeResult[], action: any, component: Tab2Page): void { // Updated to include component type
    

    
  }
  */

  scan_desktop(action: any, fn: string): void {
    const playDeviceFacingBack = (devices: any[]) => {
      const device = devices.find(f => (/environment|back|rear/gi.test(f.label))); // Default Back Facing Camera
      action.playDevice(device ? device.deviceId : devices[0].deviceId);
    };

    if (fn === 'start') {
      action[fn](playDeviceFacingBack).subscribe((r: any) => console.log(fn, r), alert);
    } else {
      action[fn]().subscribe((r: any) => console.log(fn, r), alert);
    }
  }

  isMobile(): boolean {
    const mobile_array = ["Mobi", "Android", "webOS", "iPhone", "iPad", "iPod", "BlackBerry", "IEMobile", "Opera Mini"];
    console.log(navigator.userAgent);
    for (let system of mobile_array) {
      if (navigator.userAgent.includes(system)) {
        return true;
      }
    }
    return false;
  }
}
