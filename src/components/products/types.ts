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
    last_page: number;
    data: Array<IProductItem>;
}

export interface ISearchProduct {
    page?: null|string|number,
    name?: null|string
}

export interface ProductsState {
    products: Array<IProductItem>;
    last_page: number;
}


export interface FetchProductsAction {
    type: ProductsActionTypes.FETCH_PRODUCTS,
    payload: ProductsState
}

export type ProductActions = FetchProductsAction;