export class WorkflowStep {
    step: number;
    partial_step: number;
    description: string;
    description_short: string;
    product_id: number;
    done: boolean;
    current_active: boolean;
    picture_path_before: string;
    picture_path_after: string;

    constructor(step: number, partial_step: number, description: string, description_short:string
                , product_id: number, picture_path_before: string, picture_path_after: string){
        this.step = step;
        this.partial_step = partial_step;
        this.description = description;
        this.description_short = description_short;
        this.product_id = product_id;
        this.done = false;
        this.current_active = false;
        this.picture_path_before = picture_path_before;
        this.picture_path_after = picture_path_after;
    }
}
