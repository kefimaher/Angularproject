import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { ResidenceComponent } from './residence/residence.component';
import { ApartmentComponent } from './apartment/apartment.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ProductComponent,
    ResidenceComponent,
    ApartmentComponent
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
