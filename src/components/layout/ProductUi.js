
import React, {Fragment, useEffect} from "react";
import {useSelector , useDispatch} from "react-redux";
import {getAllProducts, selectProduct} from "../../features/productsFetching/productSlice";
import ProductLists from "../products/ProductLists";


export default function ProductUi()
{
    const productLists = useSelector(selectProduct)
    const dispatch = useDispatch()


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{
        console.log('hello')
        dispatch(getAllProducts())
    },[dispatch])
    return (
        <Fragment>

            <div className={'bg-gray-50'}>
                <h2 className={'text-center mt-10 font-roboto text-2xl border-b-2 border-b-blue-600 w-1/5 p-3 mx-auto margin text-black'}>Featured Products</h2>
                <section className={'p-11  w-4/5 mx-auto'}>
                    <ProductLists productLists={productLists}/>
                </section>
            </div>


        </Fragment>
    )
}