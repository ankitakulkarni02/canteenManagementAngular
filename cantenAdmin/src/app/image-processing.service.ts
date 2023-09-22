import { Injectable } from '@angular/core';
import { ItemAdd } from './item-add';
import { FileHandle } from './file-handle.model';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ImageProcessingService {

  constructor(private sanitizer:DomSanitizer) { }
  public createImages(items:ItemAdd)  {
    const foodImg:any[]=items.itemImages;

    const foodImgsToFileHandle:FileHandle[]=[];

    for(let i=0;i<foodImg.length;i++){
      const imageFileData=foodImg[i];

     const imageBlob= this.dataURLToBlob(imageFileData['picByte'],imageFileData['image_type']);

    const imageFile= new File([imageBlob],imageFileData['image_name'],{type:imageFileData['image_type']});

    const finalFileHandle:FileHandle={
      file:imageFile,
      url:this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
    };
    foodImgsToFileHandle.push(finalFileHandle);
    }
    items.itemImages=foodImgsToFileHandle;
    return items;

  }
  public dataURLToBlob(picBytes: string,imageType: any){
   const byteString= window.atob(picBytes);
   const arrayBuffer=new ArrayBuffer(byteString.length);

   const int8Array=new Uint8Array(arrayBuffer);

   for(let i=0;i<byteString.length;i++){
    int8Array[i]= byteString.charCodeAt(i);
   }
   const blob=new Blob([int8Array],{type:imageType});
   return blob;
  }

}
