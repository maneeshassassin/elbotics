import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Allcss.css';
import BlogCard from './BlogCard';
import BlogComp from './BlogComp';
import UrlLoc from './UrlLocation';


const Blog=()=>{
    return(
        <>
<UrlLoc title="Blog"/>
        <div className="container-fluid my-5">
          
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-5 gx-5">
                {
                        BlogComp.map((value,index)=>{
                            return <BlogCard
                            key={index}
                            imgsource={value.imgof}
                            />
                        })
                }

                   
             </div>
         </div>
        </div>        
       </div>

       <div className='container my-2'>
           <div className='row'>
               <div className='col-3 mx-auto'>
               <nav aria-label="Page navigation example">
  <ul className="pagination pagecolor">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li className="page-item active"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link text-dark" href="#">2</a></li>
    <li className="page-item"><a className="page-link text-dark" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
                   </div>
               </div>
           </div>
        </>
    )
};
export default Blog;