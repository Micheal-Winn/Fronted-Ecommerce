import React, { Fragment } from "react";
import {
    Route,
    Routes
} from "react-router-dom"
import './index.css'
import WebFont from "webfontloader"
import Home from "./components/Home/Home";
import RootLayout from "./components/layout/RootLayout";
import ProductUi from "./components/layout/ProductUi";
import Helmet from 'react-helmet'
import ProductDetails from "./components/products/ProductDetails";
import {store} from './app/store'
import Search from "./components/products/Search";
import LoginSignUp from "./components/User/LoginSignUp";
import {loadUser} from "./features/UserFetching/userSlice";
import {useSelector} from "react-redux";



function App() {

    const {Authenticated ,user} = useSelector((state)=> state.user)

    React.useEffect(()=>{
        WebFont.load({
            google:{
                families :['Roboto','Droid']
            }
        })
        // store.dispatch(loadUser())
    },[])
  return (<Fragment>
          <Helmet>
              <title>
                  ECOMMERCE
              </title>
          </Helmet>

            <Routes >
                {Authenticated && <UserOptions user={user}/>}
                <Route index path={'/'} element={<Home/>}/>
                <Route  path='/product' element={<RootLayout/>}>
                    <Route index element={<ProductUi/>}/>
                    <Route path=':id' element={<ProductDetails/>}/>
                    <Route path={'products/:keyword'} element={<ProductUi/>}/>
                </Route>
                <Route path={'/search'} element={<Search/>}/>
                <Route path={'/login'} element={<LoginSignUp/>}/>
            </Routes>
        </Fragment>
)
}

export default App;
