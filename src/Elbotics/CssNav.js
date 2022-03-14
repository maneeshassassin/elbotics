import React from 'react';
import './Nav.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BiCollapse } from 'react-icons/bi';
import { BsFillHeartFill } from 'react-icons/bs';
import { GiShoppingCart } from 'react-icons/gi';
import { Link } from 'react-router-dom';



const CssNav = ()=>{

const track = ()=>{
  prompt("Enter Tracking No");
};

    return(
        <>
        <div className='container-fluid bordss'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <div className='row'>
                       
                        <div className='col-9 mx-auto d-flex me-0'>
                        <div class="dropdown mt-4">
  <button class="dropbtn"><span className='fs-5'><BiCollapse/> </span>All Categories</button>
  <div class="dropdown-content">
  <div class="dropdown1">
  <button class="dropbtn1">New Arrivals</button>
  <div class="dropdown-content1" style={{right:"-120%"}}>
  <Link to="/DropCategory">New Arrivals </Link>
  <Link to="/DropCategory">LCD TV </Link>
  </div>
</div>
 
  <Link to="/DropCategory">Top Deals</Link>
  <Link to="/DropCategory">Shop By Brand</Link>
  <div class="dropdown1">
  <button class="dropbtn1">Learning Robotic</button>
  <div class="dropdown-content1"  style={{right:"-100%"}}>
  <li><Link to="/DropCategory">Robotic kits</Link></li>
  <li><Link to="/DropCategory">Drone kits</Link></li>
  <li><Link to="/DropCategory">Sensor kits</Link></li>
  <li><Link to="/DropCategory">components kit</Link></li>
  </div>
</div>
  <div class="dropdown1">
  <button class="dropbtn1">Drone parts</button>
  <div class="dropdown-content1" style={{minWidth:"500px",left:"100%"}}>
      <div className='container-fluid'>
          <div className='row'>
     
              <div className='col-6 border-bottom'> 
              <li  className='fw-bold'><Link to="/DropCategory">Drone Assembly parts</Link></li><hr/>
              <li className='fs-6'><Link to="/DropCategory"> Motors</Link></li>
              <li><Link to="/DropCategory">Frames </Link></li>
              <li><Link to="/DropCategory"> FPV-Telementry Trans Reciver</Link></li>
              <li><Link to="/DropCategory"> Gimbal</Link></li>
              </div>
              <div className='col-6'>
                   <li className='fw-bold'><Link to="/DropCategory">Controllers</Link></li><hr/>
              <li><Link to="/DropCategory">Fight Controllers</Link></li>
              <li><Link to="/DropCategory">Speed Controllers</Link></li>
              <li><Link to="/DropCategory">Drone Transmitter</Link></li>
              <li><Link to="/DropCategory">Propellers</Link></li><hr/>
              <li><Link to="/DropCategory">upto 3-inch</Link></li>
              <li><Link to="/DropCategory">3 to 7 inch</Link></li>
              <li><Link to="/DropCategory">8 to 1-inch</Link></li>
              <li><Link to="/DropCategory">11-inch and Above</Link></li>
              <li><Link to="/DropCategory">Carbon Fiber</Link></li>
              
              </div>
          </div>

  </div>
  </div>
</div>
  <div class="dropdown1">
  <button class="dropbtn1">Lithium Batteries</button>
  <div class="dropdown-content1  drop "   style={{right:"-100%"}}>
  <li><Link to="/DropCategory">Lipo Batteries</Link></li>
  <li><Link to="/DropCategory">Li-on Batteries</Link></li>
  <li><Link to="/DropCategory">BMS</Link></li>
  <li><Link to="/DropCategory">Battery Accessories</Link></li>
  </div>
</div>
 
  <div class="dropdown1">
  <button class="dropbtn1">Mottor Drivers</button>
  <div class="dropdown-content1"  style={{minWidth:"500px",right:"-240%"}}>
      <div className='container-fluid'>
          <div className='row'>
              <div className='col-6'><li className='fw-bold'><Link to="/DropCategory">Mottor Drivers</Link></li><hr/>
              <div className='row'>
                  <div className='col-12 mt-5'><li className='fw-bold'><Link to="/DropCategory">Motor Accessories</Link></li><hr/></div>
                  <div className='col-12 mb-0'><li className='fw-bold'><Link to="/DropCategory">Micro Gear Motors</Link></li><hr/></div>
              </div>
              </div>
              <div className='col-6'>
                  <li className='fw-bold'><Link to="/DropCategory">Misc Motor</Link><hr/></li>
                    <li><Link to="/DropCategory">Servo Motors</Link></li>
                    <li><Link to="/DropCategory">Stepper Motor</Link></li>
                    <li><Link to="/DropCategory">Bo Motor</Link></li>
                    <li><Link to="/DropCategory">Plastic Gear Motor</Link></li>
                    <li><Link to="/DropCategory">Drone Motor</Link></li>
                    <li><Link to="/DropCategory">Solenoid & Electromagnets</Link></li>
                    <li><Link to="/DropCategory">Cooling Fans</Link></li>
                    <li><Link to="/DropCategory">Pumps</Link></li>
                    <li className='fw-bold'><Link to="/DropCategory">Motor Drivers</Link></li><hr/>
                    
                    </div>
          </div>
           </div>
  </div>
</div>
  
  <Link to="/DropCategory">Rasberry pi</Link>
  <Link to="/DropCategory">#d ports</Link>
  <Link to="/DropCategory">Cameras</Link>
  <Link to="/DropCategory">Sensors</Link>
  <Link to="/DropCategory">All Categories</Link>
  </div>
</div>
                        <ul className="topnav mt-2">
  <li><Link className="active text-dark" to="/">Home</Link></li>
  <li><Link to="/Blog" className=' text-dark'>Blog</Link></li>
  <li><Link to="/Contactus" className=' text-dark'>Contact us</Link></li>
  <li className="right "><Link to="/Aboutus" className=' text-dark'>About us</Link></li>
  <li className="right"><Link to="" className=' text-dark' onClick={track}>Track Order</Link></li>
</ul>

                            </div>
                            <div className='col-3 mt-4'>
                                <a href="#" className='fs-4 pe-4'><GiShoppingCart/></a>
                                <a href="#" className='fs-4'><BsFillHeartFill/></a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
       
        </>
    )
};
export default CssNav;