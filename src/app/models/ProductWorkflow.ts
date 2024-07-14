import { WorkflowStep } from "./WorkflowStep";

export class ProductWorkflow {

    workflow_step_array: WorkflowStep[] = [];

    workflowstep1_1 = new WorkflowStep(1, 1, 'PRODUCT_WORKFLOW.STEP_1_1_DETAIL', 'PRODUCT_WORKFLOW.STEP_1_1', -1, '', './assets/product_pictures/pngs/schritt_1_find.png');
    workflowstep1_2 = new WorkflowStep(1, 2, 'PRODUCT_WORKFLOW.STEP_1_2_DETAIL', 'PRODUCT_WORKFLOW.STEP_1_2', 1, '', './assets/product_pictures/pngs/schritt_1_find.png');
    workflowstep1_3 = new WorkflowStep(1, 3, 'PRODUCT_WORKFLOW.STEP_1_3_DETAIL', 'PRODUCT_WORKFLOW.STEP_1_3', -1, './assets/product_pictures/pngs/schritt_1_find.png', './assets/product_pictures/pngs/schritt_1_put.png');

    workflowstep2_1 = new WorkflowStep(2, 1, 'PRODUCT_WORKFLOW.STEP_2_1', 'PRODUCT_WORKFLOW.STEP_2_1', -1, './assets/product_pictures/pngs/schritt_1_put.png', './assets/product_pictures/pngs/schritt_2_find.png');
    workflowstep2_2 = new WorkflowStep(2, 2, 'PRODUCT_WORKFLOW.STEP_2_2', 'PRODUCT_WORKFLOW.STEP_2_2', 2, './assets/product_pictures/pngs/schritt_1_put.png', './assets/product_pictures/pngs/schritt_2_find.png');
    workflowstep2_3 = new WorkflowStep(2, 3, 'PRODUCT_WORKFLOW.STEP_2_3', 'PRODUCT_WORKFLOW.STEP_2_3', -1, './assets/product_pictures/pngs/schritt_2_find.png', './assets/product_pictures/pngs/schritt_2_put.png');

    workflowstep3_1 = new WorkflowStep(3, 1, 'PRODUCT_WORKFLOW.STEP_3_1', 'PRODUCT_WORKFLOW.STEP_3_1', -1, './assets/product_pictures/pngs/schritt_2_put.png', './assets/product_pictures/pngs/schritt_3_find.png');
    workflowstep3_2 = new WorkflowStep(3, 2, 'PRODUCT_WORKFLOW.STEP_3_2', 'PRODUCT_WORKFLOW.STEP_3_2', 3, './assets/product_pictures/pngs/schritt_2_put.png', './assets/product_pictures/pngs/schritt_3_find.png');
    workflowstep3_3 = new WorkflowStep(3, 3, 'PRODUCT_WORKFLOW.STEP_3_3', 'PRODUCT_WORKFLOW.STEP_3_3', -1, './assets/product_pictures/pngs/schritt_3_find.png', './assets/product_pictures/pngs/schritt_3_put.png');

    workflowstep4_1 = new WorkflowStep(4, 1, 'PRODUCT_WORKFLOW.STEP_4_1', 'PRODUCT_WORKFLOW.STEP_4_1', -1, './assets/product_pictures/pngs/schritt_3.png', './assets/product_pictures/pngs/schritt_4.png');
    workflowstep4_2 = new WorkflowStep(4, 2, 'PRODUCT_WORKFLOW.STEP_4_2', 'PRODUCT_WORKFLOW.STEP_4_2', 4, './assets/product_pictures/pngs/schritt_3.png', './assets/product_pictures/pngs/schritt_4.png');
    workflowstep4_3 = new WorkflowStep(4, 3, 'PRODUCT_WORKFLOW.STEP_4_3', 'PRODUCT_WORKFLOW.STEP_4_3', -1, './assets/product_pictures/pngs/schritt_3.png', './assets/product_pictures/pngs/schritt_4.png');

    constructor() {
        this.workflow_step_array = [
            this.workflowstep1_1,
            this.workflowstep1_2,
            this.workflowstep1_3,
            this.workflowstep2_1,
            this.workflowstep2_2,
            this.workflowstep2_3,
            this.workflowstep3_1,
            this.workflowstep3_2,
            this.workflowstep3_3,
            this.workflowstep4_1,
            this.workflowstep4_2,
            this.workflowstep4_3
        ];
    }

    public get_product_workflow() {
        return this.workflow_step_array;
    }

    // returns all partial_steps for specific step
    public get_workflow_by_step(workflowsteps: WorkflowStep[], step_id: number) {
        return workflowsteps.filter(step => step.step === step_id);
    }

    // returns all partial_steps for specific step
    public get_workflow_partial_step(workflowsteps: WorkflowStep[], step_id: number, partial_step_id: number) {
        return workflowsteps.find(step => step.step === step_id && step.partial_step === partial_step_id) || this.workflowstep1_1;
    }

    public step_is_fully_done(workflowsteps: WorkflowStep[], step_id: number) {
        const workflows = this.get_workflow_by_step(workflowsteps, step_id);
        return workflows[workflows.length - 1].done;
    }
}
