import { Component, OnInit } from '@angular/core';
import { ProductPiece } from '../models/ProductPiece'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  image_path: string = "";
  empty_product: string = '{"id": "", "serial_number": "", "supplier_number": "", "production_date": ""}'
  current_product:ProductPiece = new ProductPiece(JSON.parse(this.empty_product));

  json_data_green = '{"id": "1", "serial_number": "000000000001", "supplier_number": "000000000001", "production_date": "2024-05-13 12:00:00", "description": "lorem ipsum grün"}';
  json_data_orange = '{"id": "2", "serial_number": "000000000002", "supplier_number": "000000000002", "production_date": "2024-05-14 13:00:00", "description": "lorem ipsum orange"}';
  constructor() {}

  ngOnInit() {
    this.test_from_json()
  }

  public test_from_json(){
    let jsonString = '{"id": "1", "serial_number": "000000000001", "supplier_number": "000000000001", "production_date": "2024-05-13 12:00:00"}';
    let product_piece = new ProductPiece(JSON.parse(jsonString));
    console.log(product_piece.id); 
    console.log(product_piece.serial_number); 
    console.log(product_piece.supplier_number); 
    console.log(product_piece.production_date); 
  }

  public show_product_information(){
    if(this.current_product.id == null || this.current_product.id == 2){
      this.show_green_product_information()
    } else {
      this.show_orange_product_information()
    }
  }

  public show_green_product_information(){
      this.current_product = new ProductPiece(JSON.parse(this.json_data_green));
      this.image_path = "../assets/product_pictures/green.jpeg"
  }

  public show_orange_product_information(){
    this.current_product = new ProductPiece(JSON.parse(this.json_data_orange));
    this.image_path = "../assets/product_pictures/orange.jpeg"
}

  

}
