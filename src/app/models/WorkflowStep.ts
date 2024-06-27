export class WorkflowStep {
    step: number;
    partial_step: number;
    description_german: string;
    description_english: string;
    product_id: number;
    done: boolean;
    current_active: boolean;
    picture_path_before: string;
    picture_path_after: string;

    constructor(step: number, partial_step: number, description_german: string, description_english: string
                , product_id: number, picture_path_before: string, picture_path_after: string){
        this.step = step;
        this.partial_step = partial_step;
        this.description_german = description_german;
        this.description_english = description_english;
        this.product_id = product_id;
        this.done = false;
        this.current_active = false;
        this.picture_path_before = picture_path_before;
        this.picture_path_after = picture_path_after;
    }
}