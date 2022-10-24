import {API_URL} from "../../setting/Api";
import axios from "axios";

const API = API_URL+'user/'

export const apiLogin = (email,password)=>
{
    const config = {headers:{"Content-Type" : "application/json"}};
    return axios.post(API+'login',{email,password},config)
}