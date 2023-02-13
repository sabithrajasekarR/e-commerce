import {configureStore} from '@reduxjs/toolkit'
import cartslicer from '../js files/cart/cartRedux'
import counterslice from '../js files/cart/counter'
import profileReducer from '../js files/profile/profileLogic'



export default configureStore({
    reducer:{
        cartItem:cartslicer,
        counter: counterslice,
        profile:profileReducer
    }
})