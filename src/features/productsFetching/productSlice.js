import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {apiGetAllProducts} from "./productApi";



const initialState ={
    products:[],
    productsCount:'',
    resultPerPage:'',
    filteredProductsCount:''
}

export const getAllProducts = createAsyncThunk(
    'product/getAllProducts',
    async ({keyword = '',currentPage , price,category,ratings })=>{
        console.log('apiprice',price,'keyword',keyword, 'currentPage',currentPage,price,category,ratings)
    const {data} = await apiGetAllProducts(keyword,currentPage,price,category,ratings);
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
                    state.resultPerPage = action.payload.resultPerPage
                    state.filteredProductsCount = action.payload.filteredProductsCount
            })
}
})
export const selectProduct = (state)=> state.product;
export default productSlice.reducer