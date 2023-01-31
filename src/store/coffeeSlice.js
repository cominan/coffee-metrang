import { createSlice } from "@reduxjs/toolkit";



const initValue = {
    apicoffee: {},
    product: [],
    totalProduct: []
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
        },
        total: (state, action) => {
            state.totalProduct.push(action.payload)
        }
    }
})


export const { apiCoffee, product, total } = coffeeSlice.actions
export const valueCoffee = (state) => state.coffee.apicoffee
export const valueProduct = (state) => state.coffee.product
export const totalItem = (state) => state.coffee.totalProduct

export default coffeeSlice.reducer