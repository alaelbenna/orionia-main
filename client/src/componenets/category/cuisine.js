import React, {useState} from 'react';
import Choose from './Choose';
import Navbar from '../Navbar';
import cs from '../img/cs.jpg'
import UnderDashboard from '../dashboard/UnderDashboard';
function Cuisine () {

    return (
   <div>
    <Navbar/> ,  

     <div className=''>
    <img src={cs} class="wc" alt="Cuisine" />
    <h1 className="displayyy-4 fw-bolder" >Cuisine </h1>
    </div>    
    <header className=" py-5">
    <div className="container px-4 px-lg-5 my-5">
      <div className="text-center ">
        <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
      </div>
    </div>
  </header>
<Choose/>
<UnderDashboard/>
   </div>
    );
}

export default Cuisine;