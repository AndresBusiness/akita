import { EntityState, EntityStore, Order, StoreConfig, arrayAdd } from '@datorama/akita';
export interface Products {
    id: number;
    nombre: string;
    descripcion:string;
    precio: number;
    estatus: boolean;
    comentarios?:any;
  }
  
export interface ProductsState extends EntityState<Products> {
    sort: {
        orderBy: any;
        order: any;
    },
    filters :{
        productsIds:number [];
      },
    search: string, 
}

/**
 * Create initial state
 */
export function createInitialState(): ProductsState {
    return { 
      sort: {
        orderBy: 'nombre',
        order: Order.ASC
      },
      search: '',
      filters :{
        productsIds: []
      },
    };
  }


@StoreConfig({ name: 'products' })
export class ProductsStore extends EntityStore<ProductsState, Products> {

    constructor() {
        super(createInitialState());
      }

      public resetAll(){
        this.update((state) => ({  
          sort: {
            orderBy: 'statusCode',
            order: Order.ASC
          },
          search: '',
          entities: {  },
          ids: [],
          loading: true,
          error: null,
        }));
      }
     
      public updateSort(field: string, sort: string): void {
        this.update((state)=>({
          ...state,
          sort: {
            orderBy: field,
            order: sort  //asc, desc
          }
        }));
      }

      public updateFilter(ids:number[]): void {
        this.update((state)=>({
          ...state,
          filters :{
            productsIds: ids
          },
        }));
      }

    
      public updateSearch(search: string) {
        this.update((state) => ({
          ...state,
          search: search
        }));
      }

      public addComment(id:number, nombre:string, comentario:string) {
        this.update(id, (product)=>{
          return {
            comentarios : [ ... product.comentarios, {nombre, comentario}]
          }
        });
      }
      
}
