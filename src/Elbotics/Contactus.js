import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Allcss.css';
import { useState } from 'react';
import { RiContactsFill} from 'react-icons/ri';
import { GrMail} from 'react-icons/gr';
import {ImLocation2} from 'react-icons/im';
import {FaMobileAlt} from 'react-icons/fa';
import UrlLoc from './UrlLocation';


const Contactus =()=>{

    const[inputs,setInputs] = useState({});
    const[text,setText]=useState('');
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
      }
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        alert("popat submit karde");

      }
      const handleChange1 = (e)=>{
        setText(e.target.value);
      };

    return(
        <>
        <UrlLoc title="Contact"/>
        <div className='container my-5'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <h3 className='text-dark'>WE'D LOVED TO</h3>
                    <h1 className='text-primary'>HEAR FROM YOU</h1>
                    <p className='text-secondary'>Send us a message and we' ll respond as soon as possible
                      </p>
                    </div>
                </div>
            </div>
    |   <div className='container-fluid'>
        <div className='row'>
            <div className='col-10 mx-auto '>
                <div className='row'>
                    <div className='col-md-6 col-12 shadow-lg border mx-auto'>
                        <div className='row'>
                            <div className='col-11 mx-auto py-4'>
                            <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                        <input type="text" value={inputs.username} name="username" 
                         onChange={handleChange} placeholder="Your Name"  class="form-control" id="exampleFormControlInput1"/>
                         </div>
                        <div class="mb-3">
                        <input type="email" value={inputs.Email} name="Email" 
                         onChange={handleChange} placeholder="Email Address"  class="form-control" id="exampleFormControlInput2"/></div>
                         <div class="mb-3">
                        <input type="number" value={inputs.mob} name="mob" 
                         onChange={handleChange} placeholder="Phone Number"  class="form-control" id="exampleFormControlInput3"/>
                         </div>
                         <div class="mb-3">
                          
                         <textarea value={text} onChange={handleChange1}  class="form-control" id="exampleFormControlInput4" placeholder='Your Message'/>
                              </div>
                         <div class="mb-3">
                         <button type="submit" class="btn btn-primary border rounded-pill submitbutton">Confirm Message</button>
                         </div>
                    </form>

                                </div>
                            </div>
                        </div>
                    <div className='col-md-4 col-12 shadow-lg ms-auto'>
                        <div className='row'>
                            <div className='col-12 my-5 '> <span className='conicon fs-4'><GrMail/></span><a href='#' className='fs ms-3'>https://elbotics.com/elbotics@gmail.com</a></div><hr className='text-primary h-250'/>
                            <div className='col-12 my-5'> <span className='coniconm fs-4'><ImLocation2/></span><a href='#' className='fs my-3 ps-3'>08, Hira Vihar Shree Ji Nagar, <p className='ps-5 ms-3 '>Ram Pura Road,Sanganer, Jaipur, Rajasthan 302020</p></a></div>
                            <div className='col-12 my-5'><span className='conicon fs-4'><FaMobileAlt/></span><a href='#' className='fs my-3 ps-3'>954900140100 000 000 000</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};
export default Contactus;