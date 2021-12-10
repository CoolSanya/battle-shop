import { Dispatch } from "react";
import http from "../../http_common";
import { ProductActions, IProductsResponse, ProductsActionTypes, ISearchProduct } from "./types";

export const fetchProducts = (search: ISearchProduct) => {
  return async (dispatch: Dispatch<ProductActions>) => {
    try {
      const response = await http.get<IProductsResponse>("api/products", {
        params: search
      });
      const { data, per_page } = response.data;
      dispatch({
        type: ProductsActionTypes.FETCH_PRODUCTS,
        payload: {
          per_page: per_page,
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
