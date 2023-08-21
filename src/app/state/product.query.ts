import { Injectable } from "@angular/core";
import { QueryEntity } from '@datorama/akita';
import { ProductsState, Products, ProductsStore } from "./product.store";
 
 

@Injectable({ providedIn: 'root' })
export class ProductQuery extends QueryEntity<ProductsState, Products> {
    constructor(protected override store: ProductsStore) {
        super(store);
    }

    selectActiveProductsCount() {
        return this.selectCount(product => product.estatus === true);
      }
    
    selectInactiveProductsCount() {
       return this.selectCount(product => product.estatus === false);
    }

    getTotal() {
        return this.selectCount();
     }
  
}