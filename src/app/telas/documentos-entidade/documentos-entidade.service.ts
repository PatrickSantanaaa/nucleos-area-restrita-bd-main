import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentosEntidadeService {

  constructor() { }

  get() {
    return Promise.resolve(this.grid1().slice(0, 5));
  }
  grid1() {
    return [
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
      }
    ]
  }
}