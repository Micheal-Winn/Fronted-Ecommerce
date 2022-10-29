import React, { Fragment } from 'react'
import {Link, Outlet} from 'react-router-dom'
import {CgMouse} from 'react-icons/cg'



const Home = () => {
  return (
    <Fragment>
        <div className='banner bg-gradient-to-r from-sky-500 to-indigo-500 h-screen
          text-center flex flex-col align-middle justify-center
         '>
            <p className='mt-40 font-semibold text-lg font-roboto text-3xl text-white'>Welcome to Ecommerce</p>
            <h1 className=' mt-28 mb-16 font-sans font-bold text-5xl text-white'>FIND AMAZING PRODUCTS BELOW</h1>
            <Link to={'/product'}  className={'flex justify-center align-middle mt-14 mb-20'}>
                <button className={'flex  text-2xl justify-center align-middle gap-2 bg-white px-9 py-3.5 rounded-md hover:bg-transparent hover:border hover:transition-all duration-500'}>Get Start<span><CgMouse/></span></button>
            </Link>
        </div>
        <Outlet/>
        {console.log('hello')}
    </Fragment>
  )
}

export default Home