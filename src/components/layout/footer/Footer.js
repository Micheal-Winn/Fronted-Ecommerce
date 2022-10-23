
import playStore from '../../../images/multiStore.png'
import {NavLink} from "react-router-dom";
import {FaFacebook, FaLinkedin, FaTwitter} from "react-icons/fa";


export default function Footer()
{
    return(
        <footer id={'footer'} className={'p-12 flex text-white align-middle bg-gray-600 justify-between'}>
            <div className={'left-footer w-1/3 text-center'}>
                <h4 className={'uppercase font-sans text-2xl'}>Download our APP</h4>
                <p className={'font-geneva text-center mt-3.5'}>Download App for Android and IOS mobile phone</p>
                <img className={'cursor-pointer mx-auto mt-3'} src={playStore} alt={'playStore'}/>
            </div>
            <div className={'mid-footer w-2/3 flex flex-col align-middle text-center'}>
                <h1 className={'text-6xl font-arial font-extrabold text-red-500'}>ECOMMERCE.</h1>
                <p className={'w-2/3 mx-auto mt-4'}>High Quality is our first priority</p>
                <p className={'w-2/3 mx-auto mt-4'}>Copyrights 2022 &copy; ThantZinWin</p>
            </div>
            <div className={'right-footer w-1/5 text-center'}>
                <h4 className={'font-arial text-3xl'}>FOLLOW US</h4>
                <ul className={'flex text-3xl gap-7 mt-6 justify-center align-middle'}>
                    <div className={'transition-all  hover:text-blue-500 hover:fill-white overflow-hidden'}><NavLink to={''}><FaLinkedin className={'w-full'}/></NavLink></div>
                    <li className={'transition-all hover:text-blue-500 hover:bg-transparent overflow-hidden border-none'}><NavLink to={''}><FaFacebook/></NavLink></li>
                    <li className={'transition-all hover:text-blue-400 hover:bg-transparent overflow-hidden'}><NavLink to={''}><FaTwitter/></NavLink></li>
                </ul>
            </div>
        </footer>
    )
}