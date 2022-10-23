import {configureStore} from "@reduxjs/toolkit";
import productReducer from '../features/productsFetching/productSlice'
import productDetailsReducer from '../features/productsFetching/productDetailsSlice'
export const store = configureStore({
    reducer:{
        product : productReducer,
        detail : productDetailsReducer
    }
})