import * as AuthActionCreators from '../../components/auth/Login/action';
import * as ProductActionCreators from '../../components/products/actions'

export default {
    ...AuthActionCreators, ... ProductActionCreators,
}