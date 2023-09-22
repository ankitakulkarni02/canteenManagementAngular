import { Component, OnInit } from '@angular/core';
import { ItemAdd } from '../item-add';
import { ItemServiceService } from '../item-service.service';
import { Router } from '@angular/router';
import { ImageProcessingService } from '../image-processing.service';
import { map } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
 
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: ItemAdd[];
  constructor(private router:Router,private itemService:ItemServiceService,private imageProcessingService:ImageProcessingService){}
  ngOnInit(): void {
    this.getFoodItems();
  }
    public getFoodItems(){
   this.itemService.getFoodItemsList()
    .pipe(
    map((x:ItemAdd[],i)=>x.map((items:ItemAdd)=>this.imageProcessingService.createImages(items)))
    // map((x:ItemAdd[],i)=>x.map((items:ItemAdd)=>this.imageProcessingService.createImages(items)))
   )
  .subscribe((resp:ItemAdd[])=>{
    console.log(resp);
    this.items=resp;

  },(error :HttpErrorResponse)=>{
    console.log(error);
  })
 
  }
 

  
  // items: ItemAdd[];
  // constructor(private itemService:ItemServiceService ,private router:Router,private imageProcessingService:ImageProcessingService){}
  // ngOnInit(): void {
  //   this.getFoodItems();
  // }
  // public getFoodItems(){
  //  this.itemService.getFoodItemsList()
  //  .pipe(
  //   map((x:ItemAdd[],i)=>x.map((items:ItemAdd)=>this.imageProcessingService.createImages(items)))
  //   // map((x:ItemAdd[],i)=>x.map((items:ItemAdd)=>this.imageProcessingService.createImages(items)))
  //  )
  // .subscribe((resp:ItemAdd[])=>{
  //   console.log(resp);
  //   this.items=resp;

  // },(error :HttpErrorResponse)=>{
  //   console.log(error);
  // })
  // // .subscribe(response =>{

    

  // //   this.items=response;
  // //  })
  // }
  updateItems(id:number){
    this.router.navigate([`updateItems`,id]);
  }
  deleteItems(id: number){
    this.itemService.delteItems(id).subscribe(data=>{
      console.log(data);
      alert("Item deleted");
      this.getFoodItems();
    })
  }

}
