import { Injectable } from "@angular/core";
import { QueryEntity } from '@datorama/akita';
import { ProductsState, Products, ProductsStore } from "./product.store";
import { combineLatest,  switchMap } from "rxjs";
 
 

@Injectable({ providedIn: 'root' })
export class ProductQuery extends QueryEntity<ProductsState, Products> {
    constructor(protected override store: ProductsStore) {
        super(store);
    }

    public selectedProductFilter$ = this.select(x => x.filters.productsIds); 
    public selectedSort$ = this.select(x => x.sort);
    public selectedSearch$ = this.select(x => x.search);


    public selectActiveProductsCount() {
        return this.selectCount(product => product.estatus === true);
      }
    
    public selectInactiveProductsCount() {
       return this.selectCount(product => product.estatus === false);
    }

    public seletTotal() {
        return this.selectCount();
    }

    public product$ = combineLatest([this.selectedProductFilter$, this.selectedSort$, this.selectedSearch$])
    .pipe(
      switchMap(([product, sort, search]) =>
          this.selectAll({
            sortBy: sort.orderBy,
            sortByOrder: sort.order,
            filterBy: entity => entity.id == product.find(x => x == entity.id) &&
                                (entity.nombre.toLocaleLowerCase().includes(search) ||
                                entity.descripcion.toLocaleLowerCase().includes(search))
          }) 
    ));      
  
}