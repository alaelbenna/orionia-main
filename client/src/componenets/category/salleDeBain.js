import React, {useState} from 'react';
import Choose from './Choose';
import Navbar from '../Navbar';
import slb from '../img/slb.jpg'
import UnderDashboard from '../dashboard/UnderDashboard';
function SalledeBain() {

    return (
   <div>
    <Navbar/> ,

<div className=''>
<img src={slb} class="wc" alt="salledebain" />
<h1 className="displayyy-4 fw-bolder" >salle_de_bains </h1>
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

export default SalledeBain;