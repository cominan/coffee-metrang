import { createSlice } from "@reduxjs/toolkit";



const initValue = {
    apicoffee: {},
    product: [],
}
export const coffeeSlice = createSlice({
    name: 'coffee',
    initialState: initValue,
    reducers: {
        apiCoffee: (state, action) => {
            state.apicoffee = action.payload
        },
        product: (state, action) => {
            state.product.push(action.payload)
        }
    }
})


export const { apiCoffee, product } = coffeeSlice.actions
export const valueCoffee = (state) => state.coffee.apicoffee
export const valueProduct = (state) => state.coffee.product

export default coffeeSlice.reducer