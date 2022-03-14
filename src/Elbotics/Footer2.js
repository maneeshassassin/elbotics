import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Footer2.css';
import { BsFacebook,BsWhatsapp,BsInstagram,BsTwitter,BsFillTelephoneInboundFill } from 'react-icons/bs';
import { BiArrowFromLeft } from 'react-icons/bi';
import { ImLocation2 } from 'react-icons/im';
import { AiFillMail } from 'react-icons/ai';
import ScrollToTop from 'react-scroll-to-top';


const Footer2 =()=>{
    return(
        <>
        <ScrollToTop smooth color='white' top="200" style={{backgroundColor:"blue"}}  />
        <div className='container-fluid mt-0 back'>
            <div className='row'>
             
                 <div className='col-11 ms-auto pb-5'>
                     <div className='row'>
                       
        <div className='col-md-4 me-0 pad'>
        <img src='http://elbotics.loopncode.in/assets/images/1631263249ELBOTICS.png' className='logo py-4 mx-auto'/>
            <p>We are deals in all electronic Spare Parts and Project Parts 
                like DC Micro Motors, Robotic Geared motors, Multi Meters, 
                All Electronic Components.
    </p>
    <div className='fouricon mt-5'>
        <a href='#' className=" border border-white rounded-circle"><BsTwitter/></a>
        <a href='#' className=" border border-white rounded-circle" ><BsInstagram/></a>
        <a href='#' className=" border border-white rounded-circle"><BsWhatsapp/></a>
        <a href='#' className=" border border-white rounded-circle"><BsFacebook/></a>
    </div>
            </div>
        <div className='col-md-4 pad'>
            <h3 className='py-3 ps-3'>FOOTER LINKS</h3>
            <ul className="text-white">
                <li><BiArrowFromLeft/><a href='#'>Home</a></li>
                <li><BiArrowFromLeft/><a href='#'>Privacy & Policy</a></li>
                <li><BiArrowFromLeft/><a href='#'>Terms & Condition</a></li>
                <li><BiArrowFromLeft/><a href='#'>Shiping Policy</a></li>
                <li><BiArrowFromLeft/><a href='#'>Refund Policy</a></li>
            </ul>
            </div>
        <div className='col-md-4 me-0'>
            <h3 className='py-3'>LOCATE US</h3>
            <address>
           <p><ImLocation2/> 08, Hira Vihar Shree Ji Nagar,</p><p> Ram Pura Road,Sanganer</p>, Jaipur, Rajasthan 302020
            </address>
            <p><BsFillTelephoneInboundFill/><span className='ms-2'>9999999999</span></p>
            <p><AiFillMail/><span className='ms-2'>maneeshassasin@gmail.com</span></p>
            <div>
            <img src="https://clipartcraft.com/images/credit-card-logo-symbol-7.png" class="img-fluid debit" alt="..."/>
            </div>
            </div>
        </div>
            </div>
            </div>
                     </div>
                    
                 
        </>
    )
};
export default Footer2;