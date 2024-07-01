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
  image_path_before = "";
  image_path_after = "";
  isSuccessToastOpen = false;
  isFailureToastOpen = false;
  

  // bauanleitung steps: 
  workflow = new ProductWorkflow();
  workflowsteps: WorkflowStep[] = this.workflow.get_product_workflow();
  display_workflowsteps: any;
  current_workflowstep: any;

  //current_step = 1
  //current_partial_step = 1

  current_process: String = "";
  current_product_piece: String = "";

  @ViewChild('action') action!: NgxScannerQrcodeComponent;

  constructor(private alertController: AlertController) {
  }

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
      this.isDesktopScanning = true;
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
    this.display_workflowsteps = this.workflow.get_workflow_by_step(this.workflowsteps, 1);

    this.current_workflowstep = this.workflow.get_workflow_partial_step(this.workflowsteps, 1, 1);
    this.current_workflowstep.current_active = true;

    this.image_path_before = this.current_workflowstep.picture_path_before;
    this.image_path_after = this.current_workflowstep.picture_path_after;
  }

  // markiere den aktuellen Montageschritt als erledigt
  public mark_as_done(step_id:number, partial_step_id: number){
    this.workflowsteps.forEach((step: any, index: any) => {
      if (step.step === step_id && step.partial_step === partial_step_id) {
        step.done = true;
        step.current_active = false;
        this.set_step_active(index + 1)
        if(this.workflow.step_is_fully_done(this.workflowsteps, step_id)){
          this.display_next_step(step_id)
        }
      }
    });
  }

  // markiere den nächsten Montageschritt als todo
  private set_step_active(index:number){
    console.log(this.workflowsteps[index])
    this.workflowsteps[index].current_active = true;
    this.current_workflowstep = this.workflowsteps[index];
  }

  private display_next_step(step_id:number){
    this.display_workflowsteps = this.workflow.get_workflow_by_step(this.workflowsteps, step_id + 1)
  }

  
  // prueft das gescannte bauteil gegen den aktuellen Montageschritt
  private check_production_piece(product_code: string){
    let scanned_product:ProductPiece = new ProductPiece(JSON.parse(product_code))

    if(scanned_product.id == this.current_workflowstep.product_id){
      this.isDesktopScanning = false;
      this.display_success_toast(true)
      this.mark_as_done(this.current_workflowstep.step, this.current_workflowstep.partial_step)
    } else {
      this.display_failure_toast(true)
      this.action["start"]().subscribe((r: any) => console.log("start", r), alert);
    }
  }

}