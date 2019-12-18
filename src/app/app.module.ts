import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from 'src/products/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from 'src/shared/convert-to-spaces.pipe';

@NgModule({
  declarations: [
    AppComponent, ProductListComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }