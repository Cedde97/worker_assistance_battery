// ------------------------------------------
// -- Add Product Workflow information to this config
// -- new WorkflowStep(step, partial_step, description_german, description_english, product_id (-1 => no need to scan));
// ------------------------------------------

import { WorkflowStep } from "./WorkflowStep";

export class ProductWorkflow {

    workflow_step_array: WorkflowStep[] = [];

    workflowstep1_1 = new WorkflowStep(1, 1, 'Suchen Sie das grüne Bauteil', 'Find the green product', -1, './assets/product_pictures/vorher.jpeg', './assets/product_pictures/nachher.jpeg');
    workflowstep1_2 = new WorkflowStep(1, 2, 'Scannen Sie das grüne Bauteil', 'Scan the green product', 1, './assets/product_pictures/vorher.jpeg', './assets/product_pictures/nachher.jpeg');
    workflowstep1_3 = new WorkflowStep(1, 3, 'Legen Sie das grüne Bauteil hochkant auf den Tisch'
                                                , 'Place the green productpiece on the table', -1, './assets/product_pictures/vorher.jpeg', './assets/product_pictures/nachher.jpeg');

    workflowstep2_1 = new WorkflowStep(2, 1, 'Suchen Sie das orange Bauteil', 'Find the orange product', -1, './assets/product_pictures/vorher.jpeg', './assets/product_pictures/nachher.jpeg');
    workflowstep2_2 = new WorkflowStep(2, 2, 'Scannen Sie das orange Bauteil', 'Scan the orange product', 2, './assets/product_pictures/vorher.jpeg', './assets/product_pictures/nachher.jpeg');
    workflowstep2_3 = new WorkflowStep(2, 3, 'Legen Sie das orange Bauteil hochkant auf den Tisch'
                                                , 'Place the orange productpiece on the table', -1, './assets/product_pictures/vorher.jpeg', './assets/product_pictures/nachher.jpeg');

    constructor(){
        this.workflow_step_array = [];

        this.workflow_step_array.push(this.workflowstep1_1);
        this.workflow_step_array.push(this.workflowstep1_2);
        this.workflow_step_array.push(this.workflowstep1_3);

        this.workflow_step_array.push(this.workflowstep2_1);
        this.workflow_step_array.push(this.workflowstep2_2);
        this.workflow_step_array.push(this.workflowstep2_3);

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