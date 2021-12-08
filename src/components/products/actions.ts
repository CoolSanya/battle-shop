import { ProductAction, IProduct, IProductsResponce, ProductActionTypes } from "./types";

import { Dispatch } from "react";
import http from "../../http_common";
import axios from "axios";

export const getProducts = () => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            const responce = await http.get<IProductsResponce>('api/products')

            const {data} = responce.data;
            SetProducts(data, dispatch);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log("Message error: ", error);
                
            }
        }
    }
}

export const SetProducts = (data: Array<IProduct>, dispatch: Dispatch<ProductAction>) => {
    dispatch({
        type: ProductActionTypes.GET_PRUODUCTS,
        payload: data,
    });
}