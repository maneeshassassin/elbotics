import React from "react";
import Featured1 from './Featured1'
import Comp from './Comp';
import 'bootstrap/dist/css/bootstrap.css';
import './Cart.css';

const Cart = (props) => {
    return(
        <>
         
             <div className="container">
                 <div className="row">
                     <div className="col-11 mx-auto my-3">
                     <h4 className="borders my-3"><span className="text-start h1des">{props.heads}</span></h4>
                         </div>
                     </div>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                  {
                      Comp.map((value,index)=>{
                          return  <Featured1 key={index}
                          imgsrc={value.imgof}
                          />
                      })
                    }
             </div>
         </div>
        </div>        
       </div>
        </>
    )
}
export default Cart;