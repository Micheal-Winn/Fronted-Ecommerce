import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import logo from '../../../images/images.png'
import {FaSearch,FaCartPlus,FaUser} from "react-icons/fa";

export default function Header()
{
    const [open,setOpen] = useState()
    return  (
        <nav className={'container mx-auto flex justify-between bg-white mt-4'}>
            <div className={'w-32 overflow-hidden'}>
                <img src={logo} alt={'logo'}/>
            </div>
                <ul className={'flex justify-between gap-24'}>
                    <li className={'font-medium uppercase hover:text-pink-500'}><NavLink to={'/'}
                      className={(navData)=> navData.isActive? 'text-blue-500': ''}
                    >Home</NavLink></li>
                    <li className={'font-medium uppercase hover:text-pink-500'}><NavLink to={'/product'}
                     className={(navData)=> navData.isActive? 'text-blue-500': ''}
                    >Products</NavLink></li>
                    <li className={'font-medium uppercase hover:text-pink-500'}><NavLink to={'/about'}
                     className={(navData)=> navData.isActive? 'text-blue-500': ''}
                    >About</NavLink></li>
                    <li className={'font-medium uppercase hover:text-pink-500'}><NavLink to={'/contact'}
                     className={(navData)=> navData.isActive? 'text-blue-500': ''}
                    >Contact Us</NavLink></li>
                </ul>
                <ul className={'flex justify-between gap-20'}>
                    <li className={'hover:text-orange-500'}><NavLink to={'/search'}><FaSearch/></NavLink></li>
                    <li className={'hover:text-orange-500'}><NavLink to={'/cart'}><FaCartPlus/></NavLink></li>
                    <li className={'hover:text-orange-500'}><NavLink to={'/login'}><FaUser/></NavLink></li>
                </ul>
        </nav>
    )
}