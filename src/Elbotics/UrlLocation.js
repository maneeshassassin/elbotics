import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Allcss.css';
import { IoIosArrowForward} from 'react-icons/io';
import { Link } from 'react-router-dom';

const UrlLoc = (props)=>{
    return(
        <>
        <div className='container-fluid'>
            <div className='row '>
                <div className='col-12 mx-auto'>
                  <div className='row'>
                      <div className='col loc'>
                          <Link to='/' className='text-dark text-decoration-none'>Home</Link>
                          <Link to='' className='text-dark text-decoration-none ps-2'><IoIosArrowForward/></Link>
                          <Link to='' className='text-dark text-decoration-none'>{props.title}</Link>
                      </div>
                  </div>
                </div>
            </div>
        </div>
        </>
    )
};
export default UrlLoc;