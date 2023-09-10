import React, {useState} from 'react';
import Choose from './Choose';
import Navbar from '../Navbar';
import bad from '../img/bad.jpg';
function Bureau() {

    return (
   <div>
    <Navbar/> ,

<div className=''>
<img src={bad} class="wc" alt="Bureau" />
<h1 className="displayyy-4 fw-bolder" >Bureau à domicile </h1>
</div>    
<header className=" py-5">
<div className="container px-4 px-lg-5 my-5">
 <div className="text-center ">
   <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
 </div>
</div>
</header> 
    
<Choose/>
   </div>
    );
}

export default Bureau;