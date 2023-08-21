import { Component } from '@angular/core'; 
import { Products, ProductsStore} from './state/product.store';
import { ProductQuery } from './state/product.query';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'akita';
  list: Products[]= [];

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
      // productStore.add(this.products[0]);
      //productStore.add(this.products);
      productStore.set(this.products);
      this.list = productQuery.getAll(); 
  }

  public eliminar(id:number){
    this.productStore.remove(id)
  }



  

  
}
