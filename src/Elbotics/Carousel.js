import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/src/dropdown';
import 'bootstrap/js/src/carousel';
import 'bootstrap/js/src/collapse'
import './Carousel.css';
import { FaSearch } from 'react-icons/fa';

const Cars =()=>{
    return(
        <>
        <div className='container-fluid mt-0'>
            <div className='row'>
                <div className='col-12 mx-auto'>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="http://elbotics.loopncode.in/assets/images/sliders/1634209364iStock-624854476-1024x683.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="	http://elbotics.loopncode.in/assets/images/sliders/1634208411slideshow-03.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="	http://elbotics.loopncode.in/assets/images/sliders/1634209439mcms.jpeg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                    </div>
                
                </div>
            </div>
        </>
    )
};
export default Cars;