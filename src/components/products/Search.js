import React, {Fragment, useState} from "react";
import {useNavigate} from "react-router-dom";
import Helmet from "react-helmet";


export default function Search()
{
    const[keyword,setKeyword] = useState('')
    const navigate = useNavigate();
    const submitHandler = (e)=>{
        e.preventDefault();
        if(keyword.trim()){
            navigate(`/product/products/${keyword}`)
        }else {
            navigate('/products')
        }
    }
    return(
       <Fragment>

           <Helmet>
               <title>
                   SEARCH A PRODUCT -- ECOMMERCE
               </title>
           </Helmet>

           <form className={'w-screen h-screen  max-w-full flex justify-center align-middle bg-gray-100 fixed top-0 left-0'} onSubmit={submitHandler}>

                   <input className={'h-[8%] my-auto border-none outline-0 shadow-md text-gray-700 px-[2vmax] py-[1vmax] w-1/2 font-bold box-border'}
                       type={'text'}
                       placeholder={'Search a product...'}
                       onChange={(e)=> setKeyword(e.target.value)}
                   />

               <input type={'submit'} className={'w-[10%] hover:bg-blue-500 my-auto bg-orange-600 p-[1vmax] font-bold text-white text-[1.1vmax] transition-all duration-500 cursor-pointer h-[8%]'} value={'search'}/>
           </form>
       </Fragment>
    )
}