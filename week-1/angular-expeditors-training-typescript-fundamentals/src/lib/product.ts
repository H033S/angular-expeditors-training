import {Product} from "./interfaces";

abstract class ProductBase
    implements Product{

  constructor(
      public id: number,
      public name: string,
      public icon: string,
  ){}

  abstract validate(): boolean;
}

//Version # 1
//+++++++++++++++++++++++++++++++++
// class FoodProduct {
//
//   id: number;
//   name: string;
//   icon: string;
//
//   constructor(
//       id: number,
//       name:string,
//       icon:string){
//
//     this.id = id;
//     this.name = name;
//     this.icon = icon;
//   }
// }

//Version #2
//+++++++++++++++++++++++++++++++
export class FoodProduct
    extends ProductBase{

  //Auto Implemented Properties
  validate(): boolean {
    return !!this.id && !!this.name && !!this.icon;
  }
}

let product = new FoodProduct(1, 'Pizza Slice', 'icon.jpg');