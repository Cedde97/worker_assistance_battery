export class ProductPiece {
    id: number;
    serial_number: number;
    supplier_number: number;
    production_date: string;
    description_german: string;
    description_english: string;
    img_path: string;
    
    constructor(data: { id: number; serial_number: number, supplier_number: number, production_date: string
                , description_german: string, description_english: string, img_path: string }) {
        this.id = data.id;
        this.serial_number = data.serial_number;
        this.supplier_number = data.supplier_number;
        this.production_date = data.production_date;
        this.description_german = data.description_german;
        this.description_english = data.description_english;
        this.img_path = data.img_path;
    }
}