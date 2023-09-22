import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemAdd } from '../item-add';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ItemServiceService } from '../item-service.service';
import { HttpClient,HttpEventType } from '@angular/common/http';
import { FileHandle } from 'src/app/file-handle.model';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-create-food-items',
  templateUrl: './create-food-items.component.html',
  styleUrls: ['./create-food-items.component.css']
})
export class CreateFoodItemsComponent implements OnInit {
  @ViewChild('f')form!:NgForm;
  items:ItemAdd=new ItemAdd();
 

  defaultValue:string="South-Indian";
  foodItems={
    foodName:'',
    foodCategory:'',
    foodAmount:0,
    foodDescription:'',
    foodImages:[]

  }
  
  constructor(private httpClient: HttpClient,
    private ItemService:ItemServiceService,
    private router:Router,private sanitizer:DomSanitizer){}
  ngOnInit():void{

  }
    //Gets called when the user selects an image
 
   gotoItemsList(){
  //  { responseType: 'text' as 'json' }
   this.router.navigate(['/items']);
  // {responseType:'text'}
  }
  //Gets called when the user clicks on submit to upload the image
  

  saveItems(){
    const itemsFormData= this.prepareFormData(this.items);
    this.ItemService.createFoodItems((itemsFormData)).subscribe(data=>{
      console.log(data);
      this.gotoItemsList();
  // {responseType:'text'}
    },
    error=>console.log(error))
  }

  prepareFormData(items:ItemAdd):FormData{
    const formData=new FormData();
    formData.append(
      'Admin',
      new Blob([JSON.stringify(items)],{type:'application/json'})
    );
    for(var i=0;i<items.itemImages.length;i++){
      formData.append(
        'imageFile',
        items.itemImages[i].file ,
        items.itemImages[i].file.name
  
      );
    }
  return formData;
  }
  
  onSubmit(_form:NgForm){

    // console.log(this.items);
    this.foodItems.foodName=this.form.value.foodName;

    // this.foodItems.foodName=this.form.value.foodName;
    this.foodItems.foodCategory=this.form.value.foodCategory;
    this.foodItems.foodAmount=this.form.value.foodAmount;
    this.foodItems.foodDescription=this.form.value.foodDescription;
  this.saveItems();
  
  }
  onlyNumbersAllowed(event:any):boolean{
    const charCode=(event.while)?event.which:event.keyCode;
    if(charCode>31&&(charCode<48||charCode>57)){
      return false;
    }
    return true;
  }
  onFileSelected(event:any){
    if(event.target.files){
      const file=event.target.files[0];

      const fileHandle:FileHandle={
        file:file,
        url:this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      }
      this.items.itemImages.push(fileHandle);

    }
  }

}
