import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Featured.css';
import {  FaRupeeSign} from 'react-icons/fa';
import {  GiShoppingCart} from 'react-icons/gi';
import { BsFillHeartFill,BsFillShareFill,BsFillEyeFill,BsStar} from 'react-icons/bs';

const Featured1 = (props) => {


    return (
      <>
      <div className='col-md-3 col-10 mx-auto gx-0'>
      <div className="card .carddimension">
  <img src={props.imgsrc} className="card-img-top cardpic" alt="..."/>
  <div className="card-body overlay">
      
      <div className='row '>
              <div className='col-6 set '>    
            <ul className="card-text text-center text mt-0 pe-2">
            <li><BsStar/><BsStar/><BsStar/><BsStar/><BsStar/></li>
            <li><FaRupeeSign/>329</li>
            <li className='mx-2'>Anti vibration shock Absorber</li>
            </ul>
            </div>
              
<div className="d-grid gap-1 col-8 mx-auto mb-auto mt-4 pt-5">
<button className="btndes" type="button"><li className='cart'><GiShoppingCart/></li>Add to Cart </button>
<button className="btndes" type="button"><li className='cart'><GiShoppingCart/></li>Buy Now</button>
          </div>
          </div>
  </div>
  <div className="overlay2">
        <div className="text1">
          <a href='#' className='icon'><BsFillHeartFill/></a>
          <a href='#' className='icon'><BsFillShareFill/></a>
          <a href='#' className='icon'><BsFillEyeFill/></a>
        </div>   
    </div>
</div> 
</div>
      </>
    )
};
export default Featured1 ;