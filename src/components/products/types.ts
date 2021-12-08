export enum ProductActionTypes {
    GET_PRUODUCTS = "GET_ALL_PRODUCTS"
}

export interface IProduct {
    id: number,
    name: string,
    detail: string,
}

export interface IProductsResponce {
    data: Array<IProduct>,
    success: boolean,
    message: string,
}

export type ProductsErrors = {
    error: string,
}

export interface ProductState {
    products: Array<IProduct>,
}

export interface ProductGetAction {
    type: ProductActionTypes.GET_PRUODUCTS,
    payload: Array<IProduct>,
}

export type ProductAction = ProductGetAction;