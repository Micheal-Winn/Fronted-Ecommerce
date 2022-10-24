import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { apiQueryProducts} from "./productApi";


const initialState = {
    querys:[],
    productsCount:'',
    resultPerPage:'',
    filteredProductsCount:''
}

export const getQueryProducts= createAsyncThunk(
    'query/getQueryProducts',
    async (keyword='',currentPage=1)=>{
        const response = await apiQueryProducts(keyword,currentPage)
        return response.data
    }
)

const queryProductsSlice = createSlice({
    name:'query',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(getQueryProducts.fulfilled,(state,action)=>{
                state.querys = action.payload.products;
                state.productsCount = action.payload.productsCount
                state.resultPerPage = action.payload.resultPerPage
                state.filteredProductsCount = action.payload.filteredProductsCount
            })
    }
})

export const getQueryProduct = (state)=> state.query;
export default queryProductsSlice.reducer;