import React, {Fragment, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ProductCard from "../Home/ProductCard";
import {Route, useParams} from "react-router-dom";
import {getQueryProduct, getQueryProducts} from "../../features/productsFetching/queryProductsSlice";
import Pagination from "react-js-pagination";
import Category from "../../categories/Categorie";

export default function Products()
{
    const [currentPage,setCurrentPage] = useState(1)
    const params = useParams()
    console.log('keyword',params.keyword)
    const dispatch = useDispatch()
    const {querys,resultPerPage,productsCount,filteredProductsCount} = useSelector(getQueryProduct)
    console.log('query',querys)
    const setCurrentPageNo = (e)=>{
        setCurrentPage(e)
    }

    let count = filteredProductsCount

    useEffect(()=>{
       dispatch(getQueryProducts(params.keyword,currentPage))
    },[dispatch,params.keyword,currentPage])
    return(
        <Fragment>
            <h1 className={'m-[2vmax] mx-auto w-1/6 border-b-[1px] p-[2vmax] text-gray-800 font-semibold text-center text-[1.5vmax]'}>Products</h1>
            <div className={'flex flex-wrap py-0 px-[5vmax] justify-center gap-[2.5vmax] mb-[3vmax]'}>
                {querys &&
                querys.map((product)=>(
                    <ProductCard key={product._id} product={product}/>
                ))
                }
            </div>
            <Category/>

            {resultPerPage < count && (
                <div className={'flex justify-center m-[6vmax]'}>
                    <Pagination activePage={currentPage}
                                itemsCountPerPage={resultPerPage}
                                totalItemsCount={productsCount}
                                onChange={setCurrentPageNo}
                                nextPageText={'Next'}
                                prevPageText={'Prev'}
                                firstPageText={'1st'}
                                lastPageText={'Last'}
                                itemClass={'page-item'}
                                linkClass={'page-link'}
                                activeClass={'pageItemActive'}
                                activeLinkClass={'pageLinkActive'}
                    />
                </div>
            )}

        </Fragment>
    )
}