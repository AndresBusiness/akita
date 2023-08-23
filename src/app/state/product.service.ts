
import { Injectable } from '@angular/core';
import { Products, ProductsStore } from './product.store';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private productStore: ProductsStore) {}


  public updateDescriptionAndPrice(id: number, descripcion: string,   precio: number): void {
    this.productStore.update((entity:Products) => entity.id == id, { descripcion: descripcion, precio: precio  });
  }

  public addProduct(product: Products) {
    this.productStore.add(product);
  }
  public addProducts(product: Products[]) {
    this.productStore.add(product);
  }

  public setProducts(product: Products[]) {
    this.productStore.set(product);
  }

  public removeProduct(id: number) {
    this.productStore.remove(id);
  }

  public filterProducts(ids: number[]) {
    this.productStore.updateFilter(ids);
  }

  public sortProducts(campo: string, sort: string) {
    this.productStore.updateSort(campo, sort);
  }


  public searchProducts(term:string) {
    this.productStore.updateSearch(term);
  }


  public addArrayComment(id:number, nombre:string, comentario:string) {
    this.productStore.addArrayComment(id, nombre, comentario);
  }

}


