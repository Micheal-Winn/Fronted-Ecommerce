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
import Products from "./components/products/Products";
import Search from "./components/products/Search";



function App() {
    React.useEffect(()=>{
        WebFont.load({
            google:{
                families :['Roboto','Droid']
            }
        })
    },[])
  return (<Fragment>
          <Helmet>
              <title>
                  ECOMMERCE
              </title>
          </Helmet>

            <Routes >
                <Route index path={'/'} element={<Home/>}/>
                <Route  path='/product' element={<RootLayout/>}>
                    <Route index element={<ProductUi/>}/>
                    <Route path=':id' element={<ProductDetails/>}/>
                    <Route path={'products'} element={<Products/>}/>
                    <Route path={'products/:keyword'} element={<Products/>}/>
                </Route>
                <Route path={'/search'} element={<Search/>}/>

            </Routes>
        </Fragment>
)
}

export default App;
