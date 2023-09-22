import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';

import { CreateFoodItemsComponent } from './create-food-items/create-food-items.component';
import { UpdateItemsComponent } from './update-items/update-items.component';
import { SearchComponentComponent } from './search-component/search-component.component';
const routes: Routes = [
  {
    path:'items',component:ItemListComponent
  },{
    path:'',redirectTo:'items',pathMatch:'full'
  },{
    path:'addItems',component:CreateFoodItemsComponent
  },{
    path:'updateItems/:id',component:UpdateItemsComponent
  },{
    path:'search/:query',component:SearchComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
