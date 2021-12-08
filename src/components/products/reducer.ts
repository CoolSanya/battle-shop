import { ProductAction, ProductState, ProductActionTypes } from "./types";

const initialState: ProductState = {
    products: [],
}

export const productReducer = (state = initialState, action: ProductAction): ProductState => {
    switch (action.type) {
        case ProductActionTypes.GET_PRUODUCTS: {
            return {
                ...state, products: action.payload
            };
        }
        default:
           return state;
    }
}
