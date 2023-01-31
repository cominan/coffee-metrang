import { configureStore } from '@reduxjs/toolkit'
import dataCoffee from './coffeeSlice'

export const store = configureStore({
    reducer: {
        coffee: dataCoffee
    }
})