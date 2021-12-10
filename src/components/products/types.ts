export enum ProductsActionTypes {
    FETCH_PRODUCTS="FETCH_PRODUCTS"
}

export interface IProductItem {
    id: number;
    name: string;
    detail: string;
} 

export interface IProductsResponse {
    current_page: number;
    per_page: number;
    data: Array<IProductItem>;
}

export interface ISearchProduct {
    page: number|string
}

export interface ProductsState {
    products: Array<IProductItem>;
    per_page: number;
}


export interface FetchProductsAction {
    type: ProductsActionTypes.FETCH_PRODUCTS,
    payload: ProductsState
}

export type ProductActions = FetchProductsAction;