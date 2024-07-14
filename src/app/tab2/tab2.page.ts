import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';
import {
  ScannerQRCodeResult,
  NgxScannerQrcodeComponent,
} from 'ngx-scanner-qrcode';
import { WorkflowStep } from '../models/WorkflowStep';
import { ProductWorkflow } from '../models/ProductWorkflow';
import { ProductPiece } from '../models/ProductPiece';
import { PageCommunicationService } from '../models/services/page-communication.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  barcodes: Barcode[] = [];
  isDesktop = false;
  isDesktopScanning = false;
  scannedResults: String[] = [];
  image_path_before = "";
  image_path_after = "";
  isSuccessToastOpen = false;
  isFailureToastOpen = false;
  detail_level = 'detail';

  // bauanleitung steps:
  workflow = new ProductWorkflow();
  workflowsteps: WorkflowStep[] = this.workflow.get_product_workflow();
  display_workflowsteps: any;
  current_workflowstep: any;

  current_process: String = "";
  current_product_piece: String = "";

  screenHeight = window.innerHeight;
  screenWidth = window.innerWidth;

  ion_card_style = "height: " + this.screenHeight + "px"

  @ViewChild('action') action!: NgxScannerQrcodeComponent;

  constructor(
    private alertController: AlertController,
    private pageCommunicationService: PageCommunicationService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    if (!this.isMobile()) {
      this.isDesktop = true;
    }
    this.pageCommunicationService.invokeTab2ChangeDetailMethod$.subscribe((detail_level) => {
      this.changeDetailLevel(detail_level);
    });
  }

  setDefaultLanguage() {
    this.translate.use('de');
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

  changeDetailLevel(detail_level: string) {
    this.detail_level = detail_level;
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

    this.check_production_piece(barcodes[0].displayValue);
  }

  /////////////////////////////////////////////////
  // qr-scanner desktop
  ////////////////////////////////////////////////
  public onEvent(e: ScannerQRCodeResult[], action?: any): void {
    this.scannedResults.push(e[0].value);
    action["stop"]().subscribe((r: any) => console.log("stop", r), alert);

    this.check_production_piece(e[0].value);
  }

  public scan_desktop(action: any, fn: string) {
    const playDeviceFacingBack = (devices: any[]) => {
      const device = devices.find(f => (/environment|back|rear/gi.test(f.label)));
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
  async scan(action: any, fn: string): Promise<void> {
    if (!this.isDesktop) {
      this.scan_mobile();
    } else {
      this.scan_desktop(action, fn);
      this.isDesktopScanning = true;
    }
  }

  private isMobile() {
    const mobile_array = ["Mobi", "Android", "webOS", "iPhone", "iPad", "iPod", "BlackBerry", "IEMobile", "Opera Mini"];
    for (let system of mobile_array) {
      if (navigator.userAgent.includes(system)) {
        return true;
      }
    }
    return false;
  }

  public display_success_toast(isOpen: boolean) {
    this.isSuccessToastOpen = isOpen;
  }

  public display_failure_toast(isOpen: boolean) {
    this.isFailureToastOpen = isOpen;
  }

  /////////////////////////////////////////////////
  // Starte Zusammenbau:
  ////////////////////////////////////////////////

  public async startProduction() {
    this.display_workflowsteps = this.workflow.get_workflow_by_step(this.workflowsteps, 1);
    this.current_workflowstep = this.workflow.get_workflow_partial_step(this.workflowsteps, 1, 1);
    this.current_workflowstep.current_active = true;
    this.image_path_before = this.current_workflowstep.picture_path_before;
    this.image_path_after = this.current_workflowstep.picture_path_after;

    // Use translations
    this.current_workflowstep.description = await this.translate.get(this.current_workflowstep.description).toPromise();
    this.current_workflowstep.detail_description = await this.translate.get(this.current_workflowstep.detail_description).toPromise();
  }

  public mark_as_done(step_id: number, partial_step_id: number) {
    this.workflowsteps.forEach(async (step: any, index: any) => {
      if (step.step === step_id && step.partial_step === partial_step_id) {
        step.done = true;
        step.current_active = false;
        await this.set_step_active(index + 1);
        if (this.workflow.step_is_fully_done(this.workflowsteps, step_id)) {
          this.display_next_step(step_id);
        }
      }
    });
  }

  private async set_step_active(index: number) {
    this.workflowsteps[index].current_active = true;
    this.current_workflowstep = this.workflowsteps[index];
    this.image_path_before = this.current_workflowstep.picture_path_before;
    this.image_path_after = this.current_workflowstep.picture_path_after;

    // Use translations
    this.current_workflowstep.description = await this.translate.get(this.current_workflowstep.description).toPromise();
    this.current_workflowstep.detail_description = await this.translate.get(this.current_workflowstep.detail_description).toPromise();
  }

  private display_next_step(step_id: number) {
    this.display_workflowsteps = this.workflow.get_workflow_by_step(this.workflowsteps, step_id + 1);
  }

  private check_production_piece(product_code: string) {
    let scanned_product: ProductPiece = new ProductPiece(JSON.parse(product_code));

    if (scanned_product.id == this.current_workflowstep.product_id) {
      this.isDesktopScanning = false;
      this.display_success_toast(true);
      this.mark_as_done(this.current_workflowstep.step, this.current_workflowstep.partial_step);
    } else {
      this.display_failure_toast(true);
      this.action["start"]().subscribe((r: any) => console.log("start", r), alert);
    }
  }

  public show_step(step_id: number) {
    this.display_workflowsteps = this.workflow.get_workflow_by_step(this.workflowsteps, step_id);
  }

  getUniqueSteps(): number[] {
    return [...new Set(this.workflowsteps.map(step => step.step))];
  }
}
