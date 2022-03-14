import React from 'react';
import Cars from './Carousel';
import Cart from './Cart';
import Showcase from './Showcase';
import Cart1 from './Cart1';
import Best from './Bestdeals';
import Flash from './Flash';
import Cart2 from './Cart2';
import Footer1 from './Footer1';
import Bottom from './Bottom';
 
const Home =()=>{
    return(
        <>
        <Cars/>
        <Cart heads="Featured"/>
        <Showcase/>
        <Cart1 heads="Best seller"/>
        <Best/>
        <Flash/>
        <Cart2 heads="Big Save"/>
        <Bottom/>
        <Footer1/>
        </>
    )
};
export default Home;