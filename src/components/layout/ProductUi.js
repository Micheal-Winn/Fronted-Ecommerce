
import React, {Fragment, useEffect, useState} from "react";
import {useSelector , useDispatch} from "react-redux";
import {getAllProducts, selectProduct} from "../../features/productsFetching/productSlice";
import Pagination from "react-js-pagination";

import Category from "../../categories/Categorie";
import {useParams} from "react-router-dom";
import ProductCard from "../Home/ProductCard";
import Helmet from "react-helmet";



export default function ProductUi()
{
    const {keyword} = useParams()

    const [currentPage,setCurrentPage] = useState(1)
    const[price,setPrice] =useState([0,5000])
    const [category,setCategory] = useState('')
    const [ratings,setRatings] = useState(0)

    const {products,productsCount,resultPerPage,filteredProductsCount} = useSelector(selectProduct)
    console.log('products',products)
    const dispatch = useDispatch()

    const setCurrentPageNo = (e)=>{
        setCurrentPage(e)
    }
    const handleChange=(e,newPrice)=>{
        setPrice(newPrice)
    }
    console.log('slider Val1',price)

    const count = filteredProductsCount
    console.log('count',count)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{
        console.log('hello')
        dispatch(getAllProducts({keyword,currentPage, price,category,ratings}))
    },[dispatch,currentPage,price,category,ratings,keyword])
    return (
        <Fragment>

            <Helmet>
                <title>
                    PRODUCT -- ECOMMERCE
                </title>
            </Helmet>

            <div className={' min-h-[30vh]'}>
                <h2 className={'text-center mt-10 font-roboto text-2xl border-b-2 border-b-blue-600 w-1/5 p-3 mx-auto margin text-black'}>Featured Products</h2>
                <div className={'grid grid-cols-3 py-0 px-[5vmax] w-3/4 mx-auto  gap-[2.5vmax] mb-[3vmax] mt-[2vmax]'}>
                    {products &&
                        products.map((product)=>(
                            <ProductCard key={product._id} product={product}/>
                        ))
                    }
                </div>
            </div>
            <Category handleChange={handleChange} price={price} setCategory={setCategory} ratings={ratings}
                       setRatings={setRatings}/>


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


        </Fragment>
    )
}