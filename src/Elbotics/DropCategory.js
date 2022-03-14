import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Allcss.css';
import { RiArrowDropRightLine} from 'react-icons/ri';
import { FaArrowAltCircleRight} from 'react-icons/fa';
import { useState } from 'react';

const DropCategory = ()=>{
const[range,setRange]=useState(0);

const handleSubmit=(e)=>{
    e.preventDefault();
};

const handleChange =(e)=>{
    setRange(e.target.value);
}

    return(
        <>
        <div className='container-fluid my-5'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='border'>
                            <h6 className='text-center p-4 border-bottom'>Filter Result by</h6>
                            <ul className='textdark'>
                                <li><span className='arrow'><RiArrowDropRightLine></RiArrowDropRightLine></span><a href='#' className='text-dark'>New Arrivals</a></li>
                                <li><span className='arrow'><RiArrowDropRightLine></RiArrowDropRightLine></span><a href='#' className='text-dark'>Top Deals</a></li>
                                <li><span className='arrow'><RiArrowDropRightLine></RiArrowDropRightLine></span><a href='#' className='text-dark'>Shop By Brands</a></li>
                                <li><span className='arrow'><RiArrowDropRightLine></RiArrowDropRightLine></span><a href='#' className='text-dark'> Learning and Robotics Kits</a></li>
                                <li><span className='arrow'><RiArrowDropRightLine></RiArrowDropRightLine></span><a href='#' className='text-dark'> Drone Parts</a></li>
                                <li><span className='arrow'><RiArrowDropRightLine></RiArrowDropRightLine></span><a href='#' className='text-dark'> Lithium Batteries</a></li>
                                <li><span className='arrow'><RiArrowDropRightLine></RiArrowDropRightLine></span><a href='#' className='text-dark'> E-Bike Parts</a></li>
                                <li><span className='arrow'><RiArrowDropRightLine></RiArrowDropRightLine></span><a href='#' className='text-dark'> E-Bike Parts</a></li>
                                <li><span className='arrow'><RiArrowDropRightLine></RiArrowDropRightLine></span><a href='#' className='text-dark'> E-Bike Parts</a></li>
                                <li><span className='arrow'><RiArrowDropRightLine></RiArrowDropRightLine></span><a href='#' className='text-dark'>Motors, Drivers,</a></li>
                                <li><span className='arrow'><RiArrowDropRightLine></RiArrowDropRightLine></span><a href='#' className='text-dark'>Development Board</a></li>
                                <li><span className='arrow'><RiArrowDropRightLine></RiArrowDropRightLine></span><a href='#' className='text-dark'> Raspberry Pi</a></li>
                                <li><span className='arrow'><RiArrowDropRightLine></RiArrowDropRightLine></span><a href='#' className='text-dark'> Original Arduino Boards</a></li>
                                <li><span className='arrow'><RiArrowDropRightLine></RiArrowDropRightLine></span><a href='#' className='text-dark'>3D Printer Parts</a></li>
                                <li><span className='arrow'><RiArrowDropRightLine></RiArrowDropRightLine></span><a href='#' className='text-dark'>Cameras</a></li>
                                <li><span className='arrow'><RiArrowDropRightLine></RiArrowDropRightLine></span><a href='#' className='text-dark'>Sensors</a></li>
                                <li><span className='arrow'><RiArrowDropRightLine></RiArrowDropRightLine></span><a href='#' className='text-dark'>Electronic Components</a></li>
                                <li><span className='arrow'><RiArrowDropRightLine></RiArrowDropRightLine></span><a href='#' className='text-dark'>Electronic Modules</a></li>
                                <li><span className='arrow'><RiArrowDropRightLine></RiArrowDropRightLine></span><a href='#' className='text-dark'> Wires and Cables</a></li>
                                <li><span className='arrow'><RiArrowDropRightLine></RiArrowDropRightLine></span><a href='#' className='text-dark'>IoT and Wireless</a></li>
                                <li><span className='arrow'><RiArrowDropRightLine></RiArrowDropRightLine></span><a href='#' className='text-dark'>IInstrument & Tools</a></li>
                            </ul>
                            <div className='px-4 py-3'>
                                <form onSubmit={handleSubmit}>
                                <input type="range" class="form-range" min="0" max="1000" id="customRange1" value={range} onChange={handleChange}/>
                                <br/>
                                <br/>
                                <div className='border text-center py-2 px-4'>{range}</div> 
                                <br/>
                                <div className='d-flex'> 
                                <button type="submit" class="btn btn-primary mb-3 text-center mx-auto py-2 px-4 border rounded-pill">SEARCH</button>
                                </div>
                                </form>
                                </div> 
                            </div>
                           <div className='border mt-3'>
                               <h6 className='p-4 border-bottom text-center'>Filters</h6>
                               <li className='ps-2 mb-2 mt-3'><span><FaArrowAltCircleRight/></span>Warranty Type</li>
                               <div className='ps-2'>
                                   <form>
                                   <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">No Warranty</label>
                                   </div>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                            <label class="form-check-label" for="flexCheckChecked">Local seller Warranty</label>
                                    </div>
                                    <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                            <label class="form-check-label" for="flexCheckChecked">Non local warranty</label>
                                    </div>
                                    <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                            <label class="form-check-label" for="flexCheckChecked">International Manufacturer Warranty</label>
                                    </div>
                                    <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                            <label class="form-check-label" for="flexCheckChecked">International Seller Warranty</label>
                                    </div>
                                   </form>
                               </div>
                           </div>
                                                     
                        </div>
                      <div className='col-7'>
                          <p className='text-end pt-1 fs-5'>Sort By :</p>
                          <p className='text-center pt-4 fs-3'>No product Found</p>
                      </div>
                      
                        <div className='col-2 mx-auto'>
                            <div className='text-end'>
                                <select class="form-select selectcat pe-0" aria-label="Default select example">
                                <option selected>Latest Product</option>
                                 <option value="1">One</option>
                                 <option value="2">Two</option>
                                 <option value="3">Three</option>
                                        </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};
export default DropCategory;