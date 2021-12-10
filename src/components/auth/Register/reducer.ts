import { RegisterAction, RegisterActionTypes, RegisterAuthAction, RegisterState } from './types';

const initialState : RegisterState = {
    user: null,
    // user: {
    //     email: "blonda@gmail.com",
    //     image: "https://wellnesso.ru/wp-content/uploads/2019/02/sharliz-teron-blondinka.jpg"
    // },
    isRegister: false,
    //isAuth: true
}

export const authReducer = (state=initialState, action: RegisterAuthAction) : RegisterState => {
    switch(action.type) {
        case RegisterActionTypes.REGISTER_AUTH: {
            return {
                ...state, isRegister: true, user: action.payload
            };
        }
        default:
            return state;
    }
}