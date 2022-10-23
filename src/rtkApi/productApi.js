// import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
//
// export const productApi = createApi({
//     reducerPath: 'productApi',
//     baseQuery: fetchBaseQuery({baseUrl:"http://localhost:3000/api/"}),
//     endpoints:(builder)=>({
//         getAllProducts: builder.query({
//             query:()=> "product/get"
//         }),
//         getProductDetail:builder.query({
//             query:(id)=> `product/${id}`
//         })
//     })
//
// })
//
// export const {useGetAllProductsQuery , useGetProductDetailQuery} = productApi