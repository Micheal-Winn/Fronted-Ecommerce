import React, {Fragment, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getProductDetails, getProductDetailsById} from "../../features/productsFetching/productDetailsSlice";
import ReactStars from "react-rating-stars-component/dist/react-stars";
import ReviewCard from "./ReviewCard";
import Helmet from "react-helmet";

export default function ProductDetails()
{
    const {id} = useParams();
    console.log('id',id)
    const dispatch = useDispatch()
    const product = useSelector(getProductDetailsById)
    console.log('product',product)

    useEffect(()=>{
        dispatch(getProductDetails(id))
    },[dispatch,id])

    const options={
        edit: false,
        color: 'rgba(20,20,20,0.1)',
        activeColor: 'tomato',
        size: window.innerWidth < 600 ? 20 : 25,
        value : product.ratings,
        isHalf: true
    }

    return(
        /// prepare loading router 6.4
       <Fragment>

           <Helmet>
               <title>
                   {`${product.name} -- ECOMMERCE`}
               </title>
           </Helmet>

           <div className={'p-16 flex w-4/5 mx-auto bg-white md:max-md:flex-col md:max-md:justify-center'}>
                   {/* eslint-disable-next-line react/style-prop-object */}
                   <div className={'w-2/4 md:max-md:w-[15rem] overflow-hidden flex w-full flex-col md:justify-center align-middle box-border border-2 border-green-400 h-96' +
                       'md:mx-auto'} >
                       {
                           product.images &&
                            product.images.map((item,i)=>(
                           <img className={'w-full'} key={item.url} src={item.url} alt={`${i} Slide`} />
                           ))
                       }


                   </div>
                   <div className={'flex w-full flex-col justify-evenly align-middle box-border py-10 px-16 md:justify-center md:text-center'}>
                      <div>
                          <h1 className={'text-4xl font-bold mb-6 '}>{product.name}</h1>
                          <p>Product # {product._id}</p>
                      </div>
                       <div className={'flex my-4 gap-2 w-[70%] justify-center align-middle px-4 border-t-2 border-t-gray-400 border-b-2 border-b-gray-400 md:mx-auto md:p-3 md:text-xl md:w-4/5'}>
                           <ReactStars {...options}/>
                           <span className={'mt-2 md:m-0.5'}>({product.numOfReviews} Reviews)</span>
                       </div>
                       <div>
                           <h1 className={'text-2xl font-bold m-3.5'}>{`$${product.price}`}</h1>
                           <div className={'flex align-middle gap-3.5 mb-7 md:flex-col'}>
                               <div className={'m-4'}>
                                   <button className={' px-3.5 py-2 bg-gray-300 cursor-pointer text-white transition-all duration-500 hover:bg-[rgba(0,0,0,0.767)]'}>
                                       -
                                   </button>
                                   <input className={'border-none w-[2vmax] text-center outline-0'} value={'1'} type={'number'}/>
                                   <button className={'px-3.5 py-2 bg-gray-300 cursor-pointer text-white transition-all duration-500 hover:bg-[rgba(0,0,0,0.767)]'}>
                                       +
                                   </button>
                               </div>
                               <button className={'font-bold border-none px-7 bg-orange-500 text-white hover:bg-gray-600 rounded-full transition-all duration-500 md:w-1/3 md:mx-auto md:px-5 md:py-3.5'}>Add to Cart</button>
                           </div>
                           <p className={'mb-5 text-2xl border-t-2 border-b-2 border-gray-500 p-[1vmax]'}>
                               status:{''}
                               <b className={product.stock < 0 ? 'text-red-500': 'text-green-500'}>
                                   {product.stock < 0 ? 'OutOfStock': 'InStock'}
                               </b>
                           </p>
                       </div>
                       <div className={'flex gap-3.5 text-2xl md:flex-col'}>
                           Description : <p>{product.description}</p>
                       </div>
                       <button className={'hover:scale-110 border-none outline-none font-bold transition-all duration-500 rounded-full  hover:text-white m-6 p-[0.8vmax] bg-orange-500 w-[18rem] text-xl text-white mx-auto md:py-4 md:px-3'}>Submit Review</button>
                   </div>
           </div>
           <h2 className={'text-black text-center font-semibold border-b-2 border-b-gray-400 p-[1vmax] w-1/5 mx-auto mt-[2vmax] mb-[4vmax]'}>REVIEWS</h2>
           {product.reviews && product.reviews[0] ? (
               <div className={'flex overflow-auto'}>
                   {product.reviews &&
                    product.reviews.map((review)=><ReviewCard review={review}/>)
                   }
               </div>
           ): (<p className={'font-semibold text-center text-black mb-8'}>No Reviews Yet</p>)
           }
       </Fragment>
    )
}