import { Component, OnInit, ViewChild } from '@angular/core';
import { Barcode } from '@capacitor-mlkit/barcode-scanning';
import { ScannerQRCodeResult, NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';
import { WorkflowStep } from '../models/WorkflowStep';
import { ProductWorkflow } from '../models/ProductWorkflow';
import { ProductPiece } from '../models/ProductPiece';
import { PageCommunicationService } from '../models/services/page-communication.service';
import { ScannerService } from '../models/services/scanner.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  // variables for backend and ui:
  barcodes: Barcode[] = [];
  isDesktop = false;
  isDesktopScanning = false;
  scannedResults: String[] = [];
  image_path_before = "";
  image_path_after = "";
  isSuccessToastOpen = false;
  isFailureToastOpen = false;
  detail_level = 'detail';
  screenHeight = window.innerHeight;
  screenWidth = window.innerWidth;
  @ViewChild('action') action!: NgxScannerQrcodeComponent;

  // assembly instruction steps:
  workflow = new ProductWorkflow();
  workflowsteps: WorkflowStep[] = this.workflow.get_product_workflow();
  display_workflowsteps: any;
  current_workflowstep: any;
  jumpWorkflowSteps: WorkflowStep[] = this.workflowsteps.filter(step => step.partial_step === 3);
  current_process: String = "";
  current_product_piece: String = "";  

  constructor(
    private pageCommunicationService: PageCommunicationService,
    public scannerService: ScannerService
  ) {}

  ngOnInit() {
    if (!this.scannerService.isMobile()) {
      this.isDesktop = true;
    }
    this.pageCommunicationService.invokeTab2ChangeDetailMethod$.subscribe((detail_level) => {
      this.changeDetailLevel(detail_level);
    });    
  }

  /////////////////////////////////////////////////
  // common functions:
  ////////////////////////////////////////////////
  // function to start scanning process
  // distinguishes between mobile and desktop:
  async scan(action: any, fn: string): Promise<void> {
    if (!this.isDesktop) { // mobile
      await this.scannerService.scan_mobile(this.barcodes, this.check_production_piece.bind(this));
    } else { // desktop
      this.scannerService.scan_desktop(action, fn);
      this.isDesktopScanning = true;
    }
  }

  // handles scan on desktop
  public onEvent(e: ScannerQRCodeResult[], action?: any): void {
    this.scannedResults.push(e[0].value);
    action["stop"]().subscribe((r: any) => console.log("stop", r), alert);
    this.check_production_piece(e[0].value)
  }

  /////////////////////////////////////////////////
  // Worklfow Logic
  ////////////////////////////////////////////////

  // (Re-)Start Workflow:
  public startProduction() {
    this.resetWorkflowSteps(this.workflowsteps);
    this.display_workflowsteps = this.workflow.get_workflow_by_step(this.workflowsteps, 1);
    this.current_workflowstep = this.workflow.get_workflow_partial_step(this.workflowsteps, 1, 1);
    this.current_workflowstep.current_active = true;
    this.image_path_before = this.current_workflowstep.picture_path_before;
    this.image_path_after = this.current_workflowstep.picture_path_after;
  }

  // resets the workflow
  private resetWorkflowSteps(steps: WorkflowStep[]): void {
    steps.forEach(step => {
        step.done = false;
        step.current_active = false;
    });
  }

  // mark current workflowstep as done
  public mark_as_done(step_id: number, partial_step_id: number) {
    this.workflowsteps.forEach((step: any, index: any) => {
      if (step.step === step_id && step.partial_step === partial_step_id) {
        step.done = true;
        step.current_active = false;
        this.set_step_active(index + 1);
        if (this.workflow.step_is_fully_done(this.workflowsteps, step_id)) {
          this.display_next_step(step_id);
        }
      }
    });

    // marks the step on the overview on the left as done
    let targetStep = this.jumpWorkflowSteps.find(step => step.step === step_id && step.partial_step === partial_step_id);  
    if (targetStep) {
      targetStep.done = true;
    }
  
  }

  // mark next workflow step as current, so "done"/"scan" button will appear
  private set_step_active(index: number) {
    console.log(this.workflowsteps[index]);
    this.workflowsteps[index].current_active = true;
    this.current_workflowstep = this.workflowsteps[index];
    this.image_path_before = this.current_workflowstep.picture_path_before;
    this.image_path_after = this.current_workflowstep.picture_path_after;
  }

  // changes to the next step in ui
  private display_next_step(step_id: number) {
    this.display_workflowsteps = this.workflow.get_workflow_by_step(this.workflowsteps, step_id + 1);
  }

  // checks the currently scanned product piece with the current workflow step
  public check_production_piece(product_code: string) {
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

  // display step in ui
  public show_step(step_id: number) {
    this.display_workflowsteps = this.workflow.get_workflow_by_step(this.workflowsteps, step_id);
  }

  // shows success toast on correctly scanned product
  public display_success_toast(isOpen: boolean) {
    this.isSuccessToastOpen = isOpen;
  }

  // shows failure toast on wrong scanned product
  public display_failure_toast(isOpen: boolean) {
    this.isFailureToastOpen = isOpen;
  }

  // changes detail level of the assembly instructions
  private changeDetailLevel(detail_level: string) {
    this.detail_level = detail_level;
  }
}
