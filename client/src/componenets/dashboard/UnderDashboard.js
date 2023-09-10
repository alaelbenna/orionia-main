import React, {useState} from 'react'
import salledeBain from '../img/salle_de_bains.jpeg'
import cuisine from '../img/cuisine.jpeg'
import title from '../img/title-orionia.png'
import Navbar from '../Navbar'
import livingroom from '../img/living-room.jpeg'
import chambre from '../img/chambre.jpeg'
import salleamanger from '../img/salle_a_manger.jpeg'
import bureau from '../img/bureau.jpeg'
import exterieur from '../img/exterieur.jpeg'
import toilette from '../img/toilette.jpeg'
import dressing from '../img/dressing.webp'
import moderne from '../img/moderne.jfif'
import minimalist from '../img/minimalist.jpeg'
import contemporaine from '../img/contemporaine.jpeg'
import scandinave from '../img/scandinave.jpeg'
import tropical from '../img/tropical.jpeg'
import japonaise from '../img/japonaise.jpeg'
import francais from  '../img/francais.jpeg'
import noel from '../img/noel.jpeg'
import halloween from '../img/halloween.jpeg'
import logo from '../img/LOGO_ORION_-2.png'
import './dashboard.css'
import Choose from '../category/Choose'
import { Link } from 'react-router-dom';
import Footer1 from '../decoration /Footer1'
import Salleàmanger from '../category/Salle à manger'
function UnderDashboard () {

    return (
        <div>
   
        
      
      
    
      

        {/* Section*/}
        <section className="py-10">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-6 justify-content-center">
             
            
              
               
            
               <div className="col mb-2">
                <div className="card h-100">
                  {/* Product image*/}
                  <img className="card-img-top" src={halloween} alt="..." />
                  {/* Product details*/}
                  <div className="card-body p-4">
                    <div className="text-center">
                      {/* Product name*/}
                      <h5 className="fw-bolder">halloween</h5>
                      {/* Product price*/}
                    </div>
                  </div>
                  {/* Product actions*/}
                 
                </div>
              </div> 
      
              
      
               <div className="col mb-2">
                <div className="card h-100">
                  {/* Product image*/}
                  <img className="card-img-top" src={noel} alt="..." />
                  {/* Product details*/}
                  <div className="card-body p-4">
                    <div className="text-center">
                      {/* Product name*/}
                      <h5 className="fw-bolder">Noël</h5>
                      {/* Product price*/}
                    </div>
                  </div>
                  {/* Product actions*/}
                 
                </div>
              </div> 
               <div className="col mb-2">
                <div className="card h-100">
                  {/* Product image*/}
                  <img className="card-img-top" src={scandinave} alt="..." />
                  {/* Product details*/}
                  <div className="card-body p-4">
                    <div className="text-center">
                      {/* Product name*/}
                      <h5 className="fw-bolder">Scandinave</h5>
                      {/* Product price*/}
                    </div>
                  </div>
                  {/* Product actions*/}
                 
                </div>
              </div>
              
               <div className="col mb-2">
                <div className="card h-100">
                  {/* Product image*/}
                  <img className="card-img-top" src={francais} alt="..." />
                  {/* Product details*/}
                  <div className="card-body p-4">
                    <div className="text-center">
                      {/* Product name*/}
                      <h5 className="fw-bolder">Français</h5>
                      {/* Product price*/}
                    </div>
                  </div>
                  {/* Product actions*/}
                 
                </div>
                </div> <div className="col mb-2">
                <div className="card h-100">
                  {/* Product image*/}
                  <img className="card-img-top" src={minimalist} alt="..." />
                  {/* Product details*/}
                  <div className="card-body p-4">
                    <div className="text-center">
                      {/* Product name*/}
                      <h5 className="fw-bolder">Minimaliste</h5>
                      {/* Product price*/}
                    </div>
                  </div>
                  {/* Product actions*/}
                 
                </div>  </div> <div className="col mb-2">
                <div className="card h-100">
                  {/* Product image*/}
                  <img className="card-img-top" src={tropical} alt="..." />
                  {/* Product details*/}
                  <div className="card-body p-4">
                    <div className="text-center">
                      {/* Product name*/}
                      <h5 className="fw-bolder">Tropicale</h5>
                      {/* Product price*/}
                    </div>
                  </div>
                  {/* Product actions*/}
                 
                </div>  </div> <div className="col mb-2">
                <div className="card h-100">
                  {/* Product image*/}
                  <img className="card-img-top" src={moderne} alt="..." />
                  {/* Product details*/}
                  <div className="card-body p-4">
                    <div className="text-center">
                      {/* Product name*/}
                      <h5 className="fw-bolder">Moderne</h5>
                      {/* Product price*/}
                    </div>
                  </div>
                  {/* Product actions*/}
                 
                </div> 
                 </div> 
     
                
              
              <div className="col mb-2">
                <div className="card h-100">
                  {/* Product image*/}
                  <img className="card-img-top" src={japonaise} alt="..." />
                  {/* Product details*/}
                  <div className="card-body p-4">
                    <div className="text-center">
                      {/* Product name*/}
                      <h5 className="fw-bolder">Japonnais</h5>
                      {/* Product price*/}
                    </div>
                  </div>
                  {/* Product actions*/}
                 
                </div>
              </div>
            </div>
          </div>
        </section>
       
      
      
      
      </div>
    );
}

export default UnderDashboard;