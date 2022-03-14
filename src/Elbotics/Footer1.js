import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Footer.css';
import { BsTruck,BsCheck2Circle,BsFillArrowUpRightCircleFill } from 'react-icons/bs';
import { FaHireAHelper } from 'react-icons/fa';

const Footer1 = ()=>{
    return(
        <>
        <div className='container-fluid container-fluid1 py-3'>
            <div className='row'>
                <div className='col-md-3 col-sm-6'> 
                <div className='row'>
                    <div className='col-4 truck'><BsTruck/></div>
                    <div className='col-8'><h5>SAME DAY SHIPPING</h5>
                    <p>All orders</p>
                    </div>
                    </div>
                    </div>
                    <div className='col-md-3 col-sm-6'> 
                    <div className='row'>
                    <div className='col-4 truck'><BsCheck2Circle/></div>
                    <div className='col-8'><h5>PAYMENT METHOD</h5>
                    <p>All orders</p>
                    </div>
                    </div>
                    </div>
                    <div className='col-md-3 col-sm-6'> 
                    <div className='row'>
                    <div className='col-4 truck'><BsFillArrowUpRightCircleFill/></div>
                    <div className='col-8'><h5>3 DAYS RETURN</h5>
                    <p>All orders</p>
                    </div>
                    </div>
                    </div>
                    <div className='col-md-3 col-sm-6'> 
                    <div className='row'>
                    <div className='col-4 truck'><FaHireAHelper/></div>
                    <div className='col-8'><h5>HELP CENTER</h5>
                    <p>All orders</p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Footer1;
