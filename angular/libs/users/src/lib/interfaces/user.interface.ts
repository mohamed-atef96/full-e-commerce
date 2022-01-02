export interface IAddress {
    governorate: string;
    city: string;
    street: string;
}

export interface IUser {
    id?: string;
    name: string;
    email: string;
    password?: string;
    phone?: string;
    token?: string;
    isAdmin?: boolean;
    address?: IAddress;
    createdAt?: Date;
}
export const defaultUSer = {
    id: '',
    name: '',
    email: '',
    password: '',
    phone:'',
    isAdmin:false,
    address:{
      governorate: '',
    city: '',
    street: ''
    }
};
