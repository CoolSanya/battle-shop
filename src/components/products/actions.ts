import { Dispatch } from "react";
import http from "../../http_common";
import { 
  ProductActions, 
  IProductsResponse, 
  ProductsActionTypes, 
  ISearchProduct,
  IAddProductResponse,
  IProductItem,
 } from "./types";

 import axios, { AxiosError } from "axios";

export const fetchProducts = (search: ISearchProduct) => {
  return async (dispatch: Dispatch<ProductActions>) => {
    try {
      const response = await http.get<IProductsResponse>("api/products", {
        params: search
      });
      const { data, last_page } = response.data;
      dispatch({
        type: ProductsActionTypes.FETCH_PRODUCTS,
        payload: {
          last_page: last_page,
          products: data
        },
      });
      return Promise.resolve();
    } catch (ex) {
      console.log("Problem fetch");
      return Promise.reject();
    }
  };
};

export const addProduct = (product: IProductItem) => {
  return async (dispatch: Dispatch<ProductActions>) => {
    try {
      const responce = await http.post<IAddProductResponse>('api/products', product);
    } catch (ex) {
      if (axios.isAxiosError(ex)) {
        console.log("error: ", ex);
        
      }
    }
  }
}
