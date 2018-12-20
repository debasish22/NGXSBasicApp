import {Product} from '../model/productmodel';

export const PRODUCT_ADD = 'AddProduct';
export const PRODUCT_DELETE = 'DeleteProduct';
export const PRODUCT_CLEAR = 'ClearProduct';

export class AddProduct {
    static readonly type = 'PRODUCT_ADD';
    constructor(public payload:  Product ) {}
}

export class DeleteProduct {
    static readonly type = 'PRODUCT_DELETE';
    constructor(public payload:  { productId: number }) {}
}

export class ClearProducts {
    static type = PRODUCT_CLEAR;
    constructor() {}
}

export type Actions = AddProduct | DeleteProduct | ClearProducts;
