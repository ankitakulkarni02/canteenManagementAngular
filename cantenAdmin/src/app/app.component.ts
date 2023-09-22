import { Component } from '@angular/core';
import { ItemServiceService } from './item-service.service';
import { ItemAdd } from './item-add';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cantenAdmin';
  constructor(private route:Router,private itemService:ItemServiceService){}
  searchResult:undefined|ItemAdd[];
  searchItems(query:KeyboardEvent){
    if(query){
      const element=query.target as HTMLInputElement;
      this.itemService.searchItems(element.value).subscribe((result)=>{
        console.warn(result);
        if(result.length>4){
        result.length=4
        }
        this.searchResult=result;
      })
      
    }
   
  }
  hideSearch(){
    this.searchResult=undefined;
  }
  submitSearch(value:string){
    this.route.navigate([`search/${value}`]);
    console.warn(value);
  }
}

