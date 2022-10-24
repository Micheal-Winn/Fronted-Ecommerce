import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {apiLogin} from "./userApi";


const initialState = {
    user :{},
    isAuthenticated : ''
}

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async ({loginEmail,loginPassword})=>{
        const {data} = await apiLogin(loginEmail,loginPassword)
        return data;
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(loginUser.fulfilled,(state,action)=>{
                state.user = action.payload.user;
                state.isAuthenticated = true
            })
           
    }
})


export default userSlice.reducer