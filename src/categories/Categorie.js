import {Slider, Typography} from "@mui/material";
import React, {Fragment} from "react";

const categories = [
    'laptop',
    'Footwear',
    'Bottom',
    'Tops',
    'Attire',
    'Camera',
    'phone'
]

export default function Category({setCategory,price,handleChange,ratings,setRatings})
{
    return(
        <Fragment>
            <div className={'lg:w-[10vmax] lg:absolute lg:top-[11vmax] lg:left-[1.5vmax] md:w-[20vmax] md:static md:m-auto'}>
                <Typography>Price</Typography>
                <Slider value={price}
                        onChange={handleChange}
                        valueLabelDisplay={'auto'}
                        aria-labelledby={'range-slider'}
                        min={0}
                        max={5000}
                />
                <Typography>Categories</Typography>
                <ul className={'p-0'}>
                    {categories.map((category)=>(
                        <li className={'hover:text-orange-700 transition-all duration-500 m-[0.4vmax] font-roboto font-bold text-[0.8vmax] text-gray-500 cursor-pointer list-none'} key={category} onClick={()=> setCategory(category)}>
                            {category}
                        </li>
                    ))}
                </ul>
                <fieldset className={'border-[1px] border-gray-400 px-5 py-2'}>
                    <Typography>Ratings Above</Typography>
                    <Slider
                        value={ratings}
                        onChange={(e,newRatings)=>{setRatings(newRatings)}}
                        aria-labelledby={'continuous-slider'}
                        valueLabelDisplay={"auto"}
                        min={0}
                        max={5}
                    />
                </fieldset>
            </div>
        </Fragment>
    )
}