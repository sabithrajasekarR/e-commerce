import React from "react";
import NavScrollExample from "./nav bar/nav";
import ControlledCarousel from "./carosel.js/carosel";
import Product from "./products/products";
import TrendingProduct from "./trending product/trending";

import {useSelector} from 'react-redux'

function Home(){
    return(<>
        
       <NavScrollExample/>
        <ControlledCarousel/>
        <Product/>
        <TrendingProduct/>
        </>
    )
}

export default Home