import { createSlice } from "@reduxjs/toolkit";

const initalCartState = { items: [], showCart: false, totalItems: 0};
const cartSlice = createSlice(
    {
    name: 'cart',
    initialState: initalCartState,
    reducers: {
        addItem(state, action) {
            const newItem = action.payload;
            if(state.items.some(item => item.id === newItem.id)){
               state.items = state.items.map(item => {
                    if(item.id === newItem.id){
                        item.quantity += newItem.quantity;
                    }
                    return item;
                })
            }
            else{
                state.items.push(newItem);
            }
            state.totalItems = state.items.reduce((tot, item) => {return tot + item.quantity} ,0);
        },
        removeItem(state, action){
            const removedItemId = action.payload.id;
            if(state.items.some(item => item.id === removedItemId)){
                state.items = state.items.map(item => {
                    if(item.id === removedItemId){
                        item.quantity --;
                    }
                    return item;
                });
                state.items = state.items.filter(item => item.quantity > 0);
            }
            state.totalItems = state.items.reduce((tot, item) => {return tot + item.quantity} ,0);

            

        },
        toggleCounter(state){
            state.showCart = !state.showCart;
        }

    }

});
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;