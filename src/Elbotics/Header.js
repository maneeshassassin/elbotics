import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Header.css';
import { BsFacebook,BsInstagram,BsTwitter } from 'react-icons/bs';
import { useEffect, useState } from "react";


const Header =()=>{
  
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 headerbg">
                    <div className="row py-2">
                    <div className="col-8">
                        <a href="#" className="lang">English</a>
                    </div>
                    <div className="col-4">
                        <div className="text-center icons">
                <a href="#">Sign in</a>
                <a href="#">Join</a>            
               <a href="#"><BsFacebook /></a>
               <a href="#"><BsInstagram  /></a>
               <a href="#"><BsTwitter /></a>
           </div>
           </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </>
    )
};
export default Header;