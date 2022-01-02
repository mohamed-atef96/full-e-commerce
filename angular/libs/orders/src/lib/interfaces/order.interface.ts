/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { IAddress, IUser } from './../../../../users/src/lib/interfaces/user.interface';
import { IOrderItems } from "./orederItems.interface";

export interface IOrder {
  _id?: string;
  user: IUser;
  orderItems: IOrderItems[];
  total: string;
  shippingAddress: IAddress;
  phone: string;
  status: string;
  createdAt?: string;
}
 export const defaultOrder:IOrder={
   _id: '',
   user: {
     name:'',
     email:''
   },
   orderItems: [],
   total: '',
   shippingAddress:{
     governorate:'',
     city:'',
     street:''
   },
   phone: '',
   status: ''
 }
