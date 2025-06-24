import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart(state, action) {
            state.push(action.payload);
        },
    }
})

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
    }
})

console.log("STORE CREATE : ", store.getState())

store.subscribe(() => {
    console.log("STORE CHANGE : ", store.getState())
})

store.dispatch(cartSlice.actions.addToCart({ id: 10, qty: 5 }));
