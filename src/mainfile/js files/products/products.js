import React from 'react'
import './product.css'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
function Product() {
    return (
        <>
        <Router>
            <div className='row product-rad'>
                <div className='col-lg-3 col-md-6 col-sm-12 pro-1'>
                <Link to="/items?q=mens">
                    <img src='http://pluspng.com/img-png/png-men-men-suit-png-image-9471-920.png' className='img-fluid' /></Link>
                    <div>
                    <h3>Mens wear</h3>
                    
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 pro-2'><Link to="/items?q=womens">
                    <img src='https://n3.sdlcdn.com/imgs/i/3/c/Women-s-Western-Wear-Cotton-SDL732021548-1-a5087.jpeg' className='img-fluid'/></Link>
                    <div>
                    <h3>Womens wear</h3>
                    
                    </div>   
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 pro-3'>
                <Link to="/items?q=kids">
                    <img src='https://tse2.mm.bing.net/th?id=OIP.qmGzmEJl8OEFwr_CDbnHtwHaHa&pid=Api&P=0' className='img-fluid' />
                    </Link>
                    <div>
                    <h3>kids wear</h3>
                    </div> 
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 pro-4'>
                <Link to="/items?q=electronics">
                    <img src='http://pluspng.com/img-png/camera-hd-png-photo-camera-png-image-2000.png' className='img-fluid'/></Link>
                    <div>
                    <h3>Electronics</h3>
                    
                    </div> 
                </div>
            </div></Router>
        </>
    )
}

export default Product