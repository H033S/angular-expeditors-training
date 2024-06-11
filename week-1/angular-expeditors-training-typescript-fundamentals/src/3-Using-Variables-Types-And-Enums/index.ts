// string, number, boolean, array 

let firstName: string | null = 'Dan';

let age: number;
age = 45;

let hasPurchased = true;

let productNames: string[] = [];
productNames.push('Basketball')


let petCount : number[] = [];

console.log(firstName, age, hasPurchased, productNames)

enum ProductType{

    Sports,
    HomeGoods,
    Groceries
}

let pt = ProductType.Sports;
if(pt === ProductType.Sports){
    console.log("This is a product")
}