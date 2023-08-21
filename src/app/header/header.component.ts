import { Component, OnInit } from '@angular/core';
import { ProductQuery } from '../state/product.query';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 
  total:number= 0; 

  constructor(private productQuery:ProductQuery) { }

  ngOnInit() {
    this.productQuery.getTotal().subscribe(data=>{
      this.total = data;
    })
 
  } 

}
