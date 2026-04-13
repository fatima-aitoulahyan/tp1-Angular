import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { ProductService } from '../services/product';

@Component({
  selector: 'app-products',
  imports: [NgForOf],
  templateUrl: './products.html',
  styleUrl: './products.css',
  standalone: true,
})
export class Products implements OnInit {
  products :Array<any> = [];
  constructor(private productService : ProductService) {
  }
  ngOnInit() {
    this.getAllProducts();

  }
  getAllProducts(){
    this.products = this.productService.getAllProducts();
  }

  protected handleDelete(product: any) {
    let v = confirm('etes vous sure de vouloir supprimer');
    if(v==true){
      this.productService.deleteProduct(product);
      this.getAllProducts();
    }


  }
}
