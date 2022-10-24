import {API_URL} from "../../setting/Api";
import axios from "axios";


const API = API_URL+'product/'

export function apiGetAllProducts(keyword,currentPage,price,category,ratings)
{
    let link = API+`get?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}`
    if(category){
        link = API+`get?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}`
    }
    if(category && ratings){
        link = API+`get?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`
    }
    return axios.get(link)
}
export function apiQueryProducts(keyword='',currentPage=1)
{
    return axios.get(API+`get?keyword=${keyword}&page=${currentPage}`)
}

export function apiGetProductDetail(id)
{
    return axios.get(API+`${id}`)
}