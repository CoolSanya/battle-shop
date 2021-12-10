import {ProductActions, ProductsActionTypes, ProductsState} from './types';

const initialState : ProductsState = {
    products: [],
    per_page: 0
}

export const productsReducer = (state = initialState, action: ProductActions) : ProductsState => {
    switch(action.type) {

        case ProductsActionTypes.FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload.products,
                per_page: action.payload.per_page
            };
        default:
            return state;
    }
    
}