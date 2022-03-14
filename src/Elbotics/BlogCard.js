import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Allcss.css';

const BlogCard=(props)=>{
    return(
        <>
        <div className='col-md-4 col-9 mx-auto'>
        <div class="card cardheight">
  <img src={props.imgsource} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">How to design an effective Art</h5>
    <p className='bparafont' class="card-text">The recording starts with the patter of a summer squall. Later, a drifting tone like that of a not-quite-tuned-in radio.</p>
    <a href="#" class="btn btn-primary border rounded-pill">READ MORE</a>
  </div>
</div>
</div>
        </>
    )
};
export default BlogCard;