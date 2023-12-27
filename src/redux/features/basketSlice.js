import { createSlice } from '@reduxjs/toolkit';
import { storeData } from '../../Data.js';


const initialState = {
    products: storeData,
    ammount: 0,
    price: 0,
};

export const basketSlice = createSlice({

    name: 'basket',
    initialState,
    reducers: {
        increadAmmount: (state, { payload }) => {

            const item = state.products.find((item) => item.name === payload.name);
            item.ammount++

        },
        decreasedAmmount: (state, { payload }) => {

            const item = state.products.find((item) => item.name === payload.name);
            item.ammount--

        },
        removedAmmount: (state, { payload }) => {

        state.products = state.products.filter((item) => item.name !== payload.name);

        },
        updateTotal: (state) => {
            let ammount = 0;
            let total = 0;

            state.products.forEach((item) => {
                ammount += item.ammount;
                total += item.ammount * item.price;
            });
            state.ammount = ammount;
            state.total = total;
    
            }
    }
})

export const { increadAmmount, decreasedAmmount, removedAmmount , updateTotal } = basketSlice.actions;

export default basketSlice.reducer;