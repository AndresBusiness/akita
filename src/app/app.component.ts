import { Component } from '@angular/core'; 
import { Products, ProductsStore} from './state/product.store';
import { ProductQuery } from './state/product.query';
import { Subscription } from 'rxjs';
import { ProductService } from './state/product.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'akita';
  list: Products[]= [];
  loading:boolean|undefined =true;
  searchTerm: string = '';
  public subs: Array<Subscription> = [];

  public products:Products[] =[
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
    },
    {
      "id": 4,
      "nombre": "Tablet SuperTab 10",
      "descripcion": "Una tablet potente con pantalla táctil de alta definición y procesador de cuatro núcleos.",
      "precio": 349.99,
      "estatus": true
    },
    {
      "id": 5,
      "nombre": "Monitor UltraView 27",
      "descripcion": "Monitor IPS de 27 pulgadas con resolución 4K para una experiencia visual impresionante.",
      "precio": 449.99,
      "estatus": true
    },
    {
      "id": 6,
      "nombre": "Cámara Digital ProShot",
      "descripcion": "Cámara digital de alta gama con sensor de 20MP y capacidades de grabación en 4K.",
      "precio": 799.99,
      "estatus": true
    },
    {
      "id": 7,
      "nombre": "Teclado Mecánico GamerX",
      "descripcion": "Teclado mecánico diseñado para jugadores con iluminación RGB y switches de alta durabilidad.",
      "precio": 89.99,
      "estatus": true
    },
    {
      "id": 8,
      "nombre": "Impresora LaserJet Pro",
      "descripcion": "Impresora láser de alta velocidad con conectividad Wi-Fi y calidad de impresión profesional.",
      "precio": 249.99,
      "estatus": true
    },
    {
      "id": 9,
      "nombre": "Altavoz Bluetooth SoundWave 360",
      "descripcion": "Altavoz portátil con sonido envolvente 360 grados y resistencia al agua.",
      "precio": 119.99,
      "estatus": true
    },
    {
      "id": 10,
      "nombre": "Reloj Inteligente FitTime",
      "descripcion": "Reloj inteligente con seguimiento de actividad física y monitor de ritmo cardíaco.",
      "precio": 179.99,
      "estatus": false,
      "comentarios": [
        {
          nombre: "juan",
          comentario:"buen producto"
        },
        {
          nombre: "juan",
          comentario:"buen producto"
        },
        {
          nombre: "juan",
          comentario:"buen producto"
        },
      ]
    }
  ]
  
  
  
  constructor(private productStore: ProductsStore,
    private productService:ProductService, private productQuery:ProductQuery) {
    this.productStore.setLoading(true);
  setTimeout(() => {
      let ids:number[] =  this.products.map(x=>x.id);
      this.productService.filterProducts(ids)
      this.productService.setProducts(this.products);

      let s = this.productQuery.product$.subscribe(data=>{
        this.list = data;
      });

      this.loading = this.productStore.getValue().loading; 
      this.subs.push(s);
  }, 1500); 
  }

  public eliminar(id:number){
    this.productService.removeProduct(id)
  }

  public filtrar(ids:number[]){
    this.productService.filterProducts(ids)
  }

  public ordenar(campo: string, sort: string): void {
    this.productService.sortProducts(campo, sort);
  }

  public search(){
    if (this.searchTerm.length > 3) {
      this.productService.searchProducts(this.searchTerm);
    }
  }

  public addComment(){
    this.productService.addComment(10, "Anahi","Pesimo producto")
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s?.unsubscribe());
  }


  

  
}
