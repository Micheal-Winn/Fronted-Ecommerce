import {configureStore} from "@reduxjs/toolkit";
import productReducer from '../features/productsFetching/productSlice'
import productDetailsReducer from '../features/productsFetching/productDetailsSlice'
import queryReducer from '../features/productsFetching/queryProductsSlice'
import userReducer from '../features/UserFetching/userSlice'
export const store = configureStore({
    reducer:{
        product : productReducer,
        detail : productDetailsReducer,
        query : queryReducer,
        user : userReducer

    }
})