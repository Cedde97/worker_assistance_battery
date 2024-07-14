export class WorkflowStep {
    step: number;
    partial_step: number;
    description_german: string;
    description_german_short: string;
    description_english: string;
    description_english_short: string;
    product_id: number;
    done: boolean;
    current_active: boolean;
    picture_path_before: string;
    picture_path_after: string;

    constructor(step: number, partial_step: number, description_german: string, description_german_short:string
                , description_english: string, description_english_short: string
                , product_id: number, picture_path_before: string, picture_path_after: string){
        this.step = step;
        this.partial_step = partial_step;
        this.description_german = description_german;
        this.description_german_short = description_german_short;
        this.description_english = description_english;
        this.description_english_short = description_english_short;
        this.product_id = product_id;
        this.done = false;
        this.current_active = false;
        this.picture_path_before = picture_path_before;
        this.picture_path_after = picture_path_after;
    }
}