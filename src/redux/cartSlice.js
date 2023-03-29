import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addItemToCart: (state, action) => {
            const timeId = new Date().getTime()
            if (state.cartItems.map(item => item.itemId).includes(action.payload.catalogItem.id))
            {
                state.cartItems = state.cartItems.map(item => {
                    if (item.itemId === action.payload.catalogItem.id) {
                        item.quantity += action.payload.quantity
                        item.totalPrice = item.quantity * action.payload.catalogItem.price
                    }
                    return item 
                })
            }
    
            else {
                state.cartItems.push({
                    id: timeId,
                    dishId: action.payload.dish.id,
                    quantity: action.payload.quantity,
                    totalPrice: action.payload.quantity * action.payload.dish.price
                })}  
        },
        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.cartItemId
            )
        }
    },
    })

export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems) => {
        return cartItems.totalPrice + total
    }, 0)
}

export const getCartItems = state => state.cart.cartItems;
export const { addItemToCart, removeItemFromCart } = slice.actions;
export default slice.reducer;

