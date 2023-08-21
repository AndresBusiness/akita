import { Component, OnInit } from '@angular/core';
import { ProductQuery } from '../state/product.query';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  totalProductsEnabled:number= 0;
  totalProductsDisabled:number= 0;

  constructor(private productQuery:ProductQuery) { }

  ngOnInit() {
    this.productQuery.selectActiveProductsCount().subscribe(data=>{
      this.totalProductsEnabled = data;
    })

    this.productQuery.selectInactiveProductsCount().subscribe(data=>{
      this.totalProductsDisabled = data;
    })

  }

}
