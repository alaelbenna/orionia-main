import React, {useState} from 'react';
import Choose from './Choose';
import Navbar from '../Navbar';
import drs from '../img/drs.jpg'
import UnderDashboard from '../dashboard/UnderDashboard';
function Dressing () {

    return (
   <div>
    <Navbar/> ,

     <div className=''>
    <img src={drs} class="wc" alt="dressing" />
    <h1 className="displayyy-4 fw-bolder" >Dressing </h1>
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

export default Dressing;