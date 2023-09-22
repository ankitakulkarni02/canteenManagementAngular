import { Component, OnInit, VERSION, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemServiceService } from '../item-service.service';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent{
  @ViewChild('f')form!:NgForm;

  defaultValue:string="South-Indian";
  foodItems={
    foodName:'',
    foodCategory:'',
    foodAmount:'',
    foodDescription:'',
  }
  
  public userFile: any =File;

  onSelectFile(event:any): void{
    const file=event.target.files[0];
   this.userFile=file;
  }
  // userFile: string | Blob;
 
  onSubmit(form:NgForm){
//     const user=form.value;
//     var  formData=new FormData();
//     formData.append('user',user);
//     formData.append('file',this.userFile);
//     this.ItemService.saveImage(formData).subscribe((response)=>{
// console.log (response);
//     });
    console.log(form);
    this.foodItems.foodName=this.form.value.foodName;
    this.foodItems.foodCategory=this.form.value.foodCategory;
    this.foodItems.foodAmount=this.form.value.foodAmount;
    this.foodItems.foodDescription=this.form.value.foodDescription;

  }
  onlyNumbersAllowed(event:any):boolean{
    const charCode=(event.while)?event.which:event.keyCode;
    if(charCode>31&&(charCode<48||charCode>57)){
      return false;
    }
    return true;
  }
  constructor(private ItemService:ItemServiceService){

  }
  
 
  
}
