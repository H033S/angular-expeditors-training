
export interface Product {
  
  id: number,
  name: string,
  icon: string,
  description?: string
}

type ProductAlias =
    string
    | {
      id: number,
      name: string,
      icon: string,
      description?: string
    };

type ProductTypeList = 'SPORTING' | 'HOME';