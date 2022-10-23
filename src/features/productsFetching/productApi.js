import {API_URL} from "../../setting/Api";
import axios from "axios";


const API = API_URL+'product/'

export function apiGetAllProducts(keyword='')
{
    return axios.get(API+`get?keyword=${keyword}`)
}

export function apiGetProductDetail(id)
{
    return axios.get(API+`${id}`)
}