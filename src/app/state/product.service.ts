
// src/app/state/task.service.ts
import { Injectable } from '@angular/core';
import { Products, ProductsStore } from './product.store';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private productStore: ProductsStore) {}


  public updateDescriptionAndPrice(id: number, descripcion: string,   precio: number): void {
    this.productStore.update((entity:Products) => entity.id == id, { descripcion: descripcion, precio: precio  });
  }

  public addTask(product: Products) {
    this.productStore.add(product);
  }

  public removeTask(id: number) {
    this.productStore.remove(id);
  }
}


