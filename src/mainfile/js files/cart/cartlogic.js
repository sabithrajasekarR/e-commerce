import {createSlice} from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name:"cartproduct",
    initialState:{
        item:[]
    },
    reducers:{
            addtocart:()=>{

            },
            removefromcart:()=>{

            }
    }

})


export const {addToCart,removeFromCart} = cartSlice.actions
export const item = (state)=> state.cartproduct.item
export default cartSlice.reducer