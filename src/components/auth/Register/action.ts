import {IRegisterModel} from './types'
import {Dispatch} from "react";
import http from '../../../http_common';

export const registerUser = (data: IRegisterModel) => {
    // return async (dispatch: Dispatch<AuthAction>) => {
    //     try {
    //         dispatch({type: AuthActionTypes.LOGIN_AUTH});
    //         const response = await http.post<IUser>('api/auth/register', data);
    //         dispatch({type: AuthActionTypes.LOGIN_AUTH_SUCCESS, payload: response.data});
    //     }
    //     catch(error) {
    //         dispatch({type: AuthActionTypes.LOGIN_AUTH_ERROR, payload: "Error"});
    //     }
    // }
}