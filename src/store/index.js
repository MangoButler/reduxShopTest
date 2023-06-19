import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart';




const store = configureStore({
    //  reducer : counterSlice.reducer
    reducer:
     {
        cart: cartReducer
    }
});






export default store;