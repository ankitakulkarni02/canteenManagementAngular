import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule} from '@angular/material/list'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { ItemListComponent } from './item-list/item-list.component';
import { CreateFoodItemsComponent } from './create-food-items/create-food-items.component';
import { UpdateItemsComponent } from './update-items/update-items.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponentComponent } from './search-component/search-component.component';
@NgModule({
   
  declarations: [
    AppComponent,
    AdminFormComponent,
  
    ItemListComponent,
    CreateFoodItemsComponent,
    UpdateItemsComponent,
    SearchComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatListModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
