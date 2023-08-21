import { Component } from '@angular/core'; 
import { Products, ProductsStore} from './state/product.store';
import { ProductQuery } from './state/product.query';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'akita';
  list: Products[]= [];
  loading:boolean|undefined =true;
  public subs: Array<Subscription> = [];

  public products:Products[] = [
    {
      "id": 1,
      "nombre": "Smartphone XYZ-200",
      "descripcion": "Un smartphone de última generación con pantalla OLED y cámara de alta resolución.",
      "precio": 599.99,
      "estatus": true
    },
    {
      "id": 2,
      "nombre": "Laptop Ultrabook Zephyr",
      "descripcion": "Una laptop ultraligera con procesador de alto rendimiento y almacenamiento SSD de gran capacidad.",
      "precio": 1299.99,
      "estatus": true
    },
    {
      "id": 3,
      "nombre": "Auriculares Inalámbricos SonicWave",
      "descripcion": "Auriculares Bluetooth con cancelación de ruido activa y calidad de sonido excepcional.",
      "precio": 149.99,
      "estatus": false
    }
  ]
  
  
  constructor(private productStore: ProductsStore, private productQuery:ProductQuery) {
    productStore.setLoading(true);
  setTimeout(() => {
    
      productStore.set(this.products);
      let s = productQuery.selectAll().subscribe(data=>{
        this.list = data;
      });           
      this.loading = productStore.getValue().loading; 
      this.subs.push(s);
  }, 3000);

     


  }

  public eliminar(id:number){
    this.productStore.remove(id)
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s?.unsubscribe());
  }


  

  
}
