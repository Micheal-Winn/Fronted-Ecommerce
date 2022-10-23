import {Fragment, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts, selectProduct} from "../../features/productsFetching/productSlice";
import ProductCard from "../Home/ProductCard";
import {useParams} from "react-router-dom";


export default function Products()
{
    const params = useParams()
    const dispatch = useDispatch()
    const {products,productsCount} = useSelector((state)=> state.product)

    const keyword = params.keyword

    useEffect(()=>{
       dispatch(getAllProducts(keyword))
    },[dispatch,keyword])
    return(
        <Fragment>
            <h1 className={'m-[2vmax] mx-auto w-1/6 border-b-[1px] p-[2vmax] text-gray-800 font-semibold text-center text-[1.5vmax]'}>Products</h1>
            <div className={'flex flex-wrap py-0 px-[5vmax] justify-center gap-[2.5vmax] mb-[3vmax]'}>
                {products &&
                products.map((product)=>(
                    <ProductCard key={product._id} product={product}/>
                ))
                }
            </div>
        </Fragment>
    )
}