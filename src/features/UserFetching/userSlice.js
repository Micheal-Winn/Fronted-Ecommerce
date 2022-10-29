import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {apiLoadUser, apiLogin, apiRegister} from "./userApi";



const initialState = {
    user :[],
    Authenticated : null,
    token:null,
    error : ''
}

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async ({loginEmail,loginPassword})=>{
        const {data} = await apiLogin(loginEmail,loginPassword)
        console.log('login',data)
        return data;
    }
)

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async ({name,email,password})=>{
        const {data} = await apiRegister(name,email,password)
        return data
    }
)

export const loadUser = createAsyncThunk(
    'user/loadUser',
    async ()=>{
        const response = await apiLoadUser()
        return response.data;
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
                state.token = action.payload.token
                state.Authenticated = true
            })
            .addCase(registerUser.fulfilled,(state,action)=>{
                state.user = action.payload
                state.Authenticated = true
            })
            .addCase(registerUser.rejected,(state,action)=>{
                state.error = action.error
            })
            .addCase(loadUser.fulfilled,(state,action)=>{
                state.user = action.payload.user
                state.Authenticated = true
            })
    }
})

export default userSlice.reducer