import { Component, OnInit } from '@angular/core';
import { ItemAdd } from '../item-add';
import { ItemServiceService } from '../item-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FileHandle } from '../file-handle.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-update-items',
  templateUrl: './update-items.component.html',
  styleUrls: ['./update-items.component.css']
})
export class UpdateItemsComponent implements OnInit {
  id!: number;
  items: ItemAdd=new ItemAdd();
 
  
  constructor(private itemService:ItemServiceService, 
    private sanitizer:DomSanitizer,
    private router:Router,private route:ActivatedRoute){}
  ngOnInit():void{
    // this.items=new ItemAdd();
    this.id=this.route.snapshot.params['id'];
    this.itemService.getItemsbyId(this.id).subscribe(data=>{
      this.items=data;
      
    },error=>console.log(error)
    
    );
   
  }
  // updateItems(){
  //   this.itemService.updateItems(this.id,this.items).subscribe({
  //     next:(data)=>console.log(data),
  //     error:(error )=>console.log(error),
  //     complete:()=>this.gotoFoodItemsList()
  //   })
  //   // this.itemService.updateItems(this.item_id,this.items).subscribe((data: any)=>{
  //   //   console.log(data);
  //   //   this.items=new ItemAdd();
  //   //  this.gotoFoodItemsList();
  //   // },(error: any)=>console.log(error))
  // }
  gotoFoodItemsList(){
    this.router.navigate(['/items']);
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
  //  gotoItemsList(){

  // //  { responseType: 'text' as 'json' }
  //  this.router.navigate(["/items"]);
  
  // }
  // saveItems(){
  //   this.itemService.createFoodItems((this.items)).subscribe(data=>{
  //     console.log(data);
  //     this.gotoItemsList();
 
  //   },
  //   error=>console.log(error))
  // }
  
  onSubmit(){
    this.itemService.updateItems(this.id,this.items).subscribe(data=>{
      this.gotoItemsList();
    },
    error =>console.log(error));
    // this.updateItems();
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
  gotoItemsList(){
    //  { responseType: 'text' as 'json' }
     this.router.navigate(["/items"]);
    // {responseType:'text'}
    }
  onlyNumbersAllowed(event:any):boolean{
    const charCode=(event.while)?event.which:event.keyCode;
    if(charCode>31&&(charCode<48||charCode>57)){
      return false;
    }
    return true;
  }
}
