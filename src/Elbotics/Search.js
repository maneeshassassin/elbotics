import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/src/dropdown';
import './Search.css';
import { FaSearch } from 'react-icons/fa';

const Search =()=>{
    return(
        <>
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <div className='row'>
                        <div className='col-6 mt-2 col-md-2 col-lg-2 mx-md-auto'><img src='http://elbotics.loopncode.in/assets/images/1631263249ELBOTICS.png' className='logo p-1'/></div>
                        <div className='col-md-2 col-6  bord py-2'>
                        <div class="dropdown">
  <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    All Categories
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
</div>
  <div className='col-12 col-sm-10 col-md-8  mx-auto bord'>
  <form class="d-flex">
      <input class="form-control form-control1 me-2 pt-3" type="search" placeholder="Search for products" aria-label="Search"/>
      <button class="btn" type="submit"><FaSearch/></button>
    </form>
      </div>
    </div>
         </div>
         </div>
         </div>
        </>
    )
};
export default Search;