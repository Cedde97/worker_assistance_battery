export class ProductPiece {
    id: number;
    serial_number: number;
    supplier_number: number;
    production_date: string;
    description: string;
    
    constructor(data: { id: number; serial_number: number, supplier_number: number, production_date: string, description: string }) {
        this.id = data.id;
        this.serial_number = data.serial_number;
        this.supplier_number = data.supplier_number;
        this.production_date = data.production_date;
        this.description = data.description;
    }
}