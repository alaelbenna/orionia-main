import React, {useState} from 'react';
import Choose from './Choose';
import Navbar from '../Navbar';
 import sl from '../img/sl.webp';
import UnderDashboard from '../dashboard/UnderDashboard';
function Salon() {

    return (
   <div>
    <Navbar/>           

         <div className=''>
    <img src={sl} class="wc" alt="Salon" />
    <h1 className="displayyy-4 fw-bolder" >Salon </h1>
    </div>       
     <header className=" py-5">
    <div className="container px-4 px-lg-5 my-5">
      <div className="text-center ">
        <h1 className="display-4 fw-bolder" >interieur Sublime , En Un Clic</h1>
        <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
      </div>
    </div>
  </header>
<Choose/>
<UnderDashboard/>
   </div>
    );
}

export default Salon;