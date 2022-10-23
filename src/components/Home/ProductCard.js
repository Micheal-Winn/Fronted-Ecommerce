import React from "react";
import {Link} from 'react-router-dom';
import ReactStars from "react-rating-stars-component/dist/react-stars";

const ProductCard = ({product})=>
{
    const options = {
        edit: false,
        color: 'rgba(20,20,20,0.1)',
        activeColor : 'tomato',
        size:window.innerWidth < 600 ? 20 : 25,
        value : product.ratings,
        isHalf :true
    }
    return(
        <Link to={product._id} className={' hover:shadow-gray-800 hover:-translate-y-0.5 hover:transition-all duration-500 shadow-md pb-2 text-white text-left width flex flex-col decoration-0 text-gray-800 mt-3.5 overflow-hidden'}>
            <img className={'w-full bg-fixed'} src={product.images[0].url} alt={product.name}/>
            <p className={'par mb-0'}>{product.name}</p>
            <div className={'m-2 flex justify-start'}>
                <ReactStars {...options}/> <span className={'m-2 font-roboto font-semibold'}>({product.numOfReviews} Reviews)</span>
            </div>
            <span className={'text-red-700 font-bold m-2'}>{`$${product.price}`}</span>
        </Link>
    )
}

export default ProductCard