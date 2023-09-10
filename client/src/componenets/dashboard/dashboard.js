import React, {useState,useEffect} from 'react'
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
import UnderDashboard from './UnderDashboard'

function Dashboard() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user has a valid token
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (accessToken && refreshToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogout = () => {
    // Remove tokens from localStorage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setIsAuthenticated(false);
  };

  
  function handleImageUpload(event) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        setSelectedImage(e.target.result);
      };

      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
    }
  }

  return (

 <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container px-4 px-lg-5">
      <img src={logo}  className="logo" />

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">ATELIER</a></li>
          <li className="nav-item"><a className="nav-link" href="/profile">PROFIL</a></li>
          <li className="nav-item"><a className="nav-link" href="/support">SUPPORT</a></li>
        </ul>
        {isAuthenticated ? (
          <li className="nav-item">
            <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button>
          </li>
        ) : (
          <li className="nav-item"><a className="nav-link" href="/login">Login</a></li>
        )}

      </div>
    </div>
  </nav> 
  


  {/* Header*/}
  <header className=" py-5">
    <div className="container px-4 px-lg-5 my-5">
      <div className="text-center ">
        <h1 className="display-4 fw-bolder" >interieur Sublime , En Un Clic</h1>
        <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
      </div>
    </div>
  </header>

<br/>
  {/* Section*/}
  <section className="py-10">
    <div className="container px-4 px-lg-5 mt-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-6 justify-content-center">
        <div className="col mb-2">
        <Link to="/sdb">
          <div className="card h-100" >
            {/* Product image*/}
            <img className="card-img-top"  src={salledeBain} alt="..." />
            {/* Product details*/}
            <div className="card-body p-4">
              <div className="text-center">
                {/* Product name*/}
                <h5 className="fw-bolder">salle de Bain</h5>
                {/* Product price*/}
              </div>
            </div>
            {/* Product actions*/}
          </div>
          </Link>

        </div>
        <div className="col mb-2">
          <Link to="/cuisine">
          
          <div className="card h-100">
            {/* Product image*/}
            <img className="card-img-top" src={cuisine} alt="..." />
            {/* Product details*/}
            <div className="card-body p-4">
              <div className="text-center">
                {/* Product name*/}
                <h5 className="fw-bolder">cuisine</h5>
                {/* Product price*/}
              </div>
            </div>
            {/* Product actions*/}
          </div>
          </Link>
        </div> 
        
         <div className="col mb-2">
         <Link to="/toilette">
          <div className="card h-100">
            {/* Product image*/}
            <img className="card-img-top" src={toilette} alt="..." />
            {/* Product details*/}
            <div className="card-body p-4">
              <div className="text-center">
                {/* Product name*/}
                <h5 className="fw-bolder">toilette</h5>
                {/* Product price*/}
              </div>
            </div>
            {/* Product actions*/}
           
          </div>
          </Link>
        </div>
         
         <div className="col mb-2">
          <Link to="/salon">
          <div className="card h-100">
            {/* Product image*/}
            <img className="card-img-top" src={livingroom} alt="..." />
            {/* Product details*/}
            <div className="card-body p-4">
              <div className="text-center">
                {/* Product name*/}
                <h5 className="fw-bolder">Salon</h5>
                {/* Product price*/}
              </div>
            </div>
            {/* Product actions*/}
           
          </div>
          </Link>
          
        </div>
          <div className="col mb-2">
          <Link to="/Extérieur">
          <div className="card h-100">
            {/* Product image*/}
            <img className="card-img-top" src={exterieur} alt="..." />
            {/* Product details*/}
            <div className="card-body p-4">
              <div className="text-center">
                {/* Product name*/}
                <h5 className="fw-bolder">Extérieur Maison</h5>
                {/* Product price*/}
              </div>
            </div>
            {/* Product actions*/}
           
          </div>
          </Link>
        </div> 
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
          <Link to="/Chambre">
          <div className="card h-100">
            {/* Product image*/}
            <img className="card-img-top" src={chambre} alt="..." />
            {/* Product details*/}
            <div className="card-body p-4">
              <div className="text-center">
                {/* Product name*/}
                <h5 className="fw-bolder">Chambre</h5>
                {/* Product price*/}
              </div>
            </div>
            {/* Product actions*/}
           
          </div>
          </Link>
        </div>

         
        
        <div className="col mb-2">
          <Link to="/Bureau">
          <div className="card h-100">
            {/* Product image*/}
            <img className="card-img-top" src={bureau} alt="..." />
            {/* Product details*/}
            <div className="card-body p-4">
              <div className="text-center">
                {/* Product name*/}
                <h5 className="fw-bolder">Bureau à domicile</h5>
                {/* Product price*/}
              </div>
            </div>
            {/* Product actions*/}
           
          </div>
          </Link>
        </div>
        <div className="col mb-2">
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
           
          </div> 
           </div>
         
          <div className="col mb-2">
            <Link to="/Salleàmanger">
          <div className="card h-100">
            {/* Product image*/}
            <img className="card-img-top" src={salleamanger} alt="..." />
            {/* Product details*/}
            <div className="card-body p-4">
              <div className="text-center">
                {/* Product name*/}
                <h5 className="fw-bolder">Salle à manger</h5>
                {/* Product price*/}
              </div>
            </div>
            {/* Product actions*/}
           
          </div> 
          </Link>
           </div> 
           <div className="col mb-2">
            <Link to= "/dressing">
          <div className="card h-100">
            {/* Product image*/}
            <img className="card-img-top" src={dressing} alt="..." />
            {/* Product details*/}
            <div className="card-body p-4">
              <div className="text-center">
                {/* Product name*/}
                <h5 className="fw-bolder">Dressing </h5>
                {/* Product price*/}
              </div>
            </div>
            {/* Product actions*/}
           
          </div>
          </Link>
          
        </div>
        
    
      </div>
    </div>
  </section>

 



</div>

  )
}

export default Dashboard