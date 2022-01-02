import { IProduct } from './../../../../products/src/lib/interfaces/products.interface';
export interface IOrderItems{
  id?:string;
  quantity:string;
  product:IProduct
}
