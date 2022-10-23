import ReactStars from "react-rating-stars-component/dist/react-stars";

import profilePng from '../../images/profilepng.png'
export default function ReviewCard({review})
{
    const options={
        edit: false,
        color: 'rgba(20,20,20,0.1)',
        activeColor: 'tomato',
        size: window.innerWidth < 600 ? 20 : 25,
        value : review.rating,
        isHalf: true
    }
    return(<div className={' mx-auto justify-center flex-none shadow-xl rounded-lg border-none border-gray-600 w-1/3 flex align-middle gap-20 m-[1vmax] p-[3vmax]'}>
        <div className={'w-[5vmax] mb-5'}>
            <img  src={profilePng} alt={'User'}/>
        </div>
        <div>
            <p className={'text-gray-700 font-semibold text-[0.9vmax]'}>{review.name}</p>
            <ReactStars {...options}/>
            <span className={'text-gray-400 font-bold text-[.8vmax]'}>{review.comment}</span>
        </div>
    </div>)
}