// Section 1
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Product } from '../model/productmodel';
import {AddProduct, DeleteProduct, ClearProducts } from '../action/product.action';

// Section 2 - defining the model for state

export class ProductStateModel {
    products: Product [];
}

// section 3 -- declare the state

@State<ProductStateModel> ({
    name: 'products',
    defaults : {
        products: []
    }
})

export class ProductState {

     // Section 4
     @Selector()
     static getProducts(state: ProductStateModel) {
         return state.products;
     }

     // Section 5
     @Action(AddProduct)
     add(context: StateContext<ProductStateModel> , { payload }: AddProduct) {
         const state = context.getState();
         context.patchState({
             products: [...state.products, payload]
         });
         console.log(context.getState());
     }

     @Action(DeleteProduct)
     remove(
         {getState, patchState }: StateContext<ProductStateModel>,
         { payload: { productId } }: DeleteProduct) {
         patchState({
             products: getState().products.filter(a => a.id !== productId)

         });
         console.log(productId);
         console.log(getState());
     }
}




