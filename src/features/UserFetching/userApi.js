import {API_URL} from "../../setting/Api";
import axios from "axios";

const API = API_URL+'user/'

export const apiLogin = (email,password)=>
{
    const config = {headers:{"Content-Type" : "application/json"}};
    return axios.post(API+'login',{email,password},{config})
}

export const apiRegister = (name,email,password)=>
{
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    return axios.post(API+'register', {name,email,password}, {config})
}

export const apiLoadUser = ()=>{
    return axios.get(API+'me')
}