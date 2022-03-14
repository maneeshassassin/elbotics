import React from 'react';
import Header from './Header';
import Search from './Search';


import Footer2 from './Footer2';





import CssNav from './CssNav';
import FooterBottom from './FooterBottom';

import Blog from './Blog';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import {Routes,Route} from 'react-router-dom';
import DropCategory from './DropCategory';
import Home from './Home';


const App3 =()=>{
    return(
        <>
        <Header/>
    <Search/>
    <CssNav/>
    
      
        <Routes>
  
       
        <Route path='*' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path="/Blog" element={ <Blog/>}/> 
        <Route path="/Aboutus" element={<Aboutus/>}/>  
        <Route path="/Contactus" element={<Contactus/>}/>
        <Route path="/DropCategory" element={ <DropCategory/>}/>   
       
    </Routes>
   
    <Footer2/>
    <FooterBottom/>
    
        </>
        
    )
};
export default App3;