import { FileHandle } from "src/app/file-handle.model";

export class ItemAdd {
    
    item_id:number;
    item_name: string;
    item_description: string[];
    item_category: string[] ;
    item_price: string[];
    // item_image: FileHandle[]=[];
  itemImages:FileHandle[]=[];


}
