import { productsURL } from "../lib";
import {makeSolutionBuilderHost} from "ts-loader/dist/servicesHost";
<<<<<<< HEAD
import {types} from "sass";
import Number = types.Number;
=======
>>>>>>> 980c2fed4b9fbfb427de78a3cb8d3a711bd09e36

const prefix = '🐉';

type ProductType = {
  id: number;
  name: string;
  icon?: string;
}

<<<<<<< HEAD
type DifferentType =
    string |
    number |
    {
      id: number,
      name: string
    };

function main(){

  const text: DifferentType = "sun";
  const numb: DifferentType = 3;
  const otherObj: DifferentType = {
    id : 3,
    name : "Text"
  };
}

=======
>>>>>>> 980c2fed4b9fbfb427de78a3cb8d3a711bd09e36
export default async function updateOutput (id: string) {

  const products = await getProducts();
  const output = document.querySelector(`#${id}`);
  const html = layoutProducts(products);

  if(output && html){
    output.innerHTML = html;
  }
}

async function getProducts() {
   
  const response: Response = await fetch(productsURL);
  const products: ProductType[] = await response.json();
  return products;
}

function layoutProducts(products: ProductType[]) {
  
  const items = products.map((product) => {

    const { id, name, icon } = product;
    const productHtml = `
    <span class="card-id">#${id}</span>
      <i class="card-icon ${icon} fa-lg"></i>
    <span class="card-name">${name}</span>
    `;
    
    const cardHtml = `
    <li>
        <div class="card">
            <div class="card-content">
                <div class="content">
                ${productHtml}
                </div>
            </div>
        </div>
    </li>
    `;

    return cardHtml;
  });

  let productsHtml = `<ul>${items.join('')}</ul>`;
  return productsHtml;
}



runTheLearningSamples();

function runTheLearningSamples() {
  
  function displayProductInfo(id: number, name: string) {

    console.log(`${prefix} typed parameters`);
    console.log(`Product: { id=${id}, name=${name} }`)
  }

  displayProductInfo(10, 'Pizza');
  displayProductInfo(10, 'Pizza John');

  console.log(`${prefix} function declaration`);
  console.log(addNumbersDeclaration(7, 11));

  function addNumbersDeclaration(x: number, y: number): number{

    const sum: number = x + y;
    return sum;
  }

  const addNumbersExpression = function(x: number, y:number): number{

    const sum = x + y;
    return sum;
  }
  
  console.log(`${prefix} function expression`);
  console.log(addNumbersExpression(7, 11));

  const sampleProducts = [

    {
      id: 10,
      name: 'Pizza Slice',
      icon: 'fas fa-pizza-slice',
    },

    {
      id: 20,
      name: 'Ice Cream',
      icon: 'fas fa-ice-cream',
    },

    {
      id: 30,
      name: 'Cheese',
      icon: 'fas fa-cheese',
    }
  ];

  function getProductNames(): string[] {

    return sampleProducts.map((p) => p.name)
  }

  console.log(`${prefix} return array`);
  console.log(getProductNames());
  
  function getProductById(id: number): ProductType | undefined{

    return sampleProducts.find(p => id === p.id);
  }

  console.log(`${prefix} return ProductType`);
  console.log(getProductById(10));

  function displayProducts(products: ProductType[]): void {

    const productNames = products.map(p => {

      const name = p.name.toLowerCase();
      return name;
    });
    
    const msg = `Sample products include ${productNames.join(', ')}`;
    console.log(msg);
  }

  displayProducts(sampleProducts);

  const getRandomInt = (max: number = 10) => Math.floor(Math.random() * max);

  function createProduct(name: string, icon?: string){

    const id = getRandomInt(1000);
    return {
      id, name, icon
    };
  }

  console.log(`${prefix} Optional Parameters`);
  const pineapple = createProduct('pineaple', 'pine-apple.jpg');
  const mango = createProduct('mango');
  console.log(pineapple, mango);


  function createProductWithDefaults(
      name: string,
      icon: string = 'generic-fruit.jpg'){

    const id = getRandomInt(1000);
    return {
      id, name, icon
    };
  }

  console.log(`${prefix} Optional Parameters`);
  const pineapple2 = createProductWithDefaults('pineaple');
  const mango2 = createProductWithDefaults('mango');
  console.log(pineapple2, mango2);

  function buildAddress(
      street:string,
      city:string,
      ... restOfAddress:string[]){

    const address = `Address { ${street} ${city} ${restOfAddress.join(", ")}`;
    return address;
  }

  const someAddress = buildAddress(
      '1 lois lane',
      'smallville',
      'apt 51',
      'mystery country'
  );

  console.log(`${prefix} Rest Parameter`);
  console.log(someAddress);

  const displayProduct = function({id, name}: ProductType):void {

    console.log(`${prefix} Destructuring parameters`);
    console.log(`${prefix} id = ${id}, name = ${name}`);
  }

  const prod = getProductById(10);
  if(prod){
    displayProduct(prod);
  }
}