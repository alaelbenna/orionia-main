import React, {useState} from 'react';
import Choose from './Choose';
import Navbar from '../Navbar';
import wc from '../img/wc.jpg'
import UnderDashboard from '../dashboard/UnderDashboard';
import Footer1 from '../decoration /Footer1';

function Toilette() {

    return (
   <div>
    <Navbar/>     
    <div className=''>
    <img src={wc} class="wc" alt="Toialett" />
    <h1 className="displayyy-4 fw-bolder" >Toilette </h1>
    </div>      
    <hr/>
     <header className=" py-5">
    <div className="container px-4 px-lg-5 my-5">
      <div className="text-center ">
        <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
      </div>
    </div>
  </header>
<Choose/>
<UnderDashboard/>
<Footer1/>
   </div>
    );
}

export default Toilette;