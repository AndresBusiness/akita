import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsStore } from './state/product.store';

@NgModule({
  declarations: [		
    AppComponent,
      HeaderComponent,
      FooterComponent
   ],
  imports: [
    BrowserModule,
    
  ],
  providers: [ProductsStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
