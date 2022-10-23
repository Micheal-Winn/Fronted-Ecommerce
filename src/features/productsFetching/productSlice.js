import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {apiGetAllProducts} from "./productApi";



const initialState ={
    products:[],
    productsCount:''
}

export const getAllProducts = createAsyncThunk(
    'product/getAllProducts',
    async (keyword= '')=>{
    const {data} = await apiGetAllProducts(keyword= '');
    console.log('data',data)
    return data
    }
)



const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(getAllProducts.fulfilled,(state,action)=>{
                    state.products = action.payload.products;
                    state.productsCount = action.payload.productsCount
            })
}
})
export const selectProduct = (state)=> state.product.products;
export default productSlice.reducer