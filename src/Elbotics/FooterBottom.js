import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './FooterBottom.css';

const FooterBottom =()=>{
    return(
        <>
        <div className='container-fluid bg-dark'>
            <div className='row'>
                <div className='col-8 bottom py-4 mx-auto text-center'>
                    <span>Elbotics © 2021 </span>
                    <span>All Rights Reserved. Develope By</span>
                    <span><a href='#'> Loopncode</a></span>
                    </div>
                </div>
            </div>
        </>
    )
};
export default FooterBottom;