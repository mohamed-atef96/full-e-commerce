export interface IProduct {
    _id?: string;
    name: string;
    description: string;
    images: string[];
    brand: string;
    price: number;
    category: string;
    quantity: number;
    available?: boolean;
    averageRate: number;
    numRating?: number;
    isFeatured: boolean;
    createdAt?: Date;
}
export const defaultProduct: IProduct = {
    name: '',
    description: '',
    images: [],
    brand: '',
    price: 0,
    category: '',
    quantity: 0,
    isFeatured: false,
    averageRate: 0,
};
