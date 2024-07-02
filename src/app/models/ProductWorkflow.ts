// ------------------------------------------
// -- Add Product Workflow information to this config
// -- new WorkflowStep(step, partial_step, description_german, description_english, product_id (-1 => no need to scan));
// ------------------------------------------

import { WorkflowStep } from "./WorkflowStep";

export class ProductWorkflow {

    workflow_step_array: WorkflowStep[] = [];

    workflowstep1_1 = new WorkflowStep(1, 1, 'Suchen Sie das weisse Bauteil', 'Find the white product', -1, '', './assets/product_pictures/pngs/schritt_1_find.png');
    workflowstep1_2 = new WorkflowStep(1, 2, 'Scannen Sie das weisse Bauteil', 'Scan the white product', 1, '', './assets/product_pictures/pngs/schritt_1_find.png');
    workflowstep1_3 = new WorkflowStep(1, 3, 'Legen Sie das weisse Bauteil auf den Tisch'
                                                , 'Place the white productpiece on the table', -1, './assets/product_pictures/pngs/schritt_1_find.png', './assets/product_pictures/pngs/schritt_1_put.png');

    workflowstep2_1 = new WorkflowStep(2, 1, 'Suchen Sie das orange Bauteil', 'Find the orange product', -1, './assets/product_pictures/pngs/schritt_1_put.png', './assets/product_pictures/pngs/schritt_2_find.png');
    workflowstep2_2 = new WorkflowStep(2, 2, 'Scannen Sie das orange Bauteil', 'Scan the orange product', 2, './assets/product_pictures/pngs/schritt_1_put.png', './assets/product_pictures/pngs/schritt_2_find.png');
    workflowstep2_3 = new WorkflowStep(2, 3, 'Legen Sie das orange Bauteil hochkant auf den Tisch'
                                                , 'Place the orange productpiece on the table', -1, './assets/product_pictures/pngs/schritt_2_find.png', './assets/product_pictures/pngs/schritt_2_put.png');

    workflowstep3_1 = new WorkflowStep(3, 1, 'Suchen Sie das orange Bauteil', 'Find the orange product', -1, './assets/product_pictures/pngs/schritt_2_put.png', './assets/product_pictures/pngs/schritt_3_find.png');
    workflowstep3_2 = new WorkflowStep(3, 2, 'Scannen Sie das orange Bauteil', 'Scan the orange product', 3, './assets/product_pictures/pngs/schritt_2_put.png', './assets/product_pictures/pngs/schritt_3_find.png');
    workflowstep3_3 = new WorkflowStep(3, 3, 'Legen Sie das orange Bauteil hochkant auf den Tisch'
                                                , 'Place the orange productpiece on the table', -1, './assets/product_pictures/pngs/schritt_3_find.png', './assets/product_pictures/pngs/schritt_3_put.png');
        
    workflowstep4_1 = new WorkflowStep(4, 1, 'Suchen Sie das orange Bauteil', 'Find the orange product', -1, './assets/product_pictures/pngs/schritt_3.png', './assets/product_pictures/pngs/schritt_4.png');
    workflowstep4_2 = new WorkflowStep(4, 2, 'Scannen Sie das orange Bauteil', 'Scan the orange product', 4, './assets/product_pictures/pngs/schritt_3.png', './assets/product_pictures/pngs/schritt_4.png');
    workflowstep4_3 = new WorkflowStep(4, 3, 'Legen Sie das orange Bauteil hochkant auf den Tisch'
                                                , 'Place the orange productpiece on the table', -1, './assets/product_pictures/pngs/schritt_3.png', './assets/product_pictures/pngs/schritt_4.png');


    constructor(){
        this.workflow_step_array = [];

        this.workflow_step_array.push(this.workflowstep1_1);
        this.workflow_step_array.push(this.workflowstep1_2);
        this.workflow_step_array.push(this.workflowstep1_3);

        this.workflow_step_array.push(this.workflowstep2_1);
        this.workflow_step_array.push(this.workflowstep2_2);
        this.workflow_step_array.push(this.workflowstep2_3);

        this.workflow_step_array.push(this.workflowstep3_1);
        this.workflow_step_array.push(this.workflowstep3_2);
        this.workflow_step_array.push(this.workflowstep3_3);

        this.workflow_step_array.push(this.workflowstep4_1);
        this.workflow_step_array.push(this.workflowstep4_2);
        this.workflow_step_array.push(this.workflowstep4_3);

    }

    public get_product_workflow(){
        return this.workflow_step_array        
    }

    // returns all partial_steps for specific step
    public get_workflow_by_step(workflowsteps: WorkflowStep[], step_id:number){
        let steps: WorkflowStep[] = [];

        for (let step of workflowsteps) {
            if (step.step === step_id) {
                steps.push(step);
            }
        }      
        return steps
    }

    // returns all partial_steps for specific step
    public get_workflow_partial_step(workflowsteps: WorkflowStep[], step_id:number, partial_step_id:number){
        for (let step of workflowsteps) {
            if (step.step === step_id && step.partial_step === partial_step_id) {
                return step;
            }
        }      
        return this.workflowstep1_1;
    }

    public step_is_fully_done(workflowsteps: WorkflowStep[], step_id:number){
        let workflows = this.get_workflow_by_step(workflowsteps, step_id);
        return workflows[workflows.length -1].done
    }
}