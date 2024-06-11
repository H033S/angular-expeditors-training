const prefix = '🐉';

type ProductType = {
  id: number;
  name: string;
  icon?: string;
}


export default async function updateOutput (id: string) {
  //TODO
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
}