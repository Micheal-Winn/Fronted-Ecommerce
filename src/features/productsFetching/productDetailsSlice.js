import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {apiGetProductDetail} from "./productApi";




const initialState = {
    details:[]
}

export const getProductDetails = createAsyncThunk(
    'detail/getProductDetails',
    async (id)=>{
        const {data} = await apiGetProductDetail(id)
        console.log('data2',data)
        return data
    }
)

const productDetailsSlice = createSlice({
    name:'detail',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
            .addCase(getProductDetails.fulfilled,(state,action)=>{
                state.details = action.payload.product;
            })
    }
})

export const getProductDetailsById = (state)=> state.detail.details;
export default productDetailsSlice.reducer;