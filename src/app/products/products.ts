import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [NgForOf],
  templateUrl: './products.html',
  styleUrl: './products.css',
  standalone: true,
})
export class Products implements OnInit {
  products :Array<any> = [];
  constructor() {
  }
  ngOnInit() {
    this.products = [
      { id: 1, name: 'Computer ', price: 23, selected: true },
      { id: 2, name: 'Printer ', price: 1200, selected: false },
      { id: 3, name: 'Smart Phone ', price: 11000, selected: true },
    ];

  }

  protected handleDelete(product: any) {
    let v = confirm('etes vous sure de vouloir supprimer');
    if(v==true){
      this.products = this.products.filter(p=>p.id != product.id)
    }


  }
}
