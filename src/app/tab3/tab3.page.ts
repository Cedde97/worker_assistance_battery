import { Component, OnInit, ViewChild } from '@angular/core';
import { Barcode } from '@capacitor-mlkit/barcode-scanning';
import { ScannerQRCodeResult, NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ProductPiece } from '../models/ProductPiece'; // Stellen Sie sicher, dass der Pfad korrekt ist
import { ScannerService } from '../models/services/scanner.service'; // Stellen Sie sicher, dass der Pfad korrekt ist

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
  empty_product: string = '{"id": "", "serial_number": "", "supplier_number": "", "production_date": ""}';
  current_product: ProductPiece = new ProductPiece(JSON.parse(this.empty_product));

  screenHeight = window.innerHeight;
  screenWidth = window.innerWidth;

  @ViewChild('action') action!: NgxScannerQrcodeComponent;

  constructor(
    private alertController: AlertController,
    public scannerService: ScannerService, // ScannerService einfügen
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.isDesktop = !this.scannerService.isMobile(); // Auf isMobile-Funktion des ScannerService zugreifen
  }

  /////////////////////////////////////////////////
  // common functions:
  ////////////////////////////////////////////////
  async scan(action: any, fn: string): Promise<void> {
    if (!this.isDesktop) {
      await this.scannerService.scan_mobile(this.barcodes, this.show_scanned_product_information.bind(this));
    } else {
      this.scannerService.scan_desktop(action, fn);
      this.isDesktopScanning = true;
    }
  }

  public onEvent(e: ScannerQRCodeResult[], action?: any): void {
    this.scannedResults.push(e[0].value);
    action["stop"]().subscribe((r: any) => console.log("stop", r), alert);
    this.show_scanned_product_information(e[0].value)
  }


  /////////////////////////////////////////////////
  // business logic:
  ////////////////////////////////////////////////
  private show_scanned_product_information(product_code: string){
    this.current_product = new ProductPiece(JSON.parse(product_code))
    this.image_path = this.current_product.img_path;
  }

  private isMobile() {
    return this.scannerService.isMobile(); // Direkt auf isMobile-Funktion des ScannerService zugreifen
  }
}
