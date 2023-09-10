import React from 'react'
import './profile.css'
import Navbar from '../Navbar'
import logo from  '../img/LOGO_ORION_-2.png'
function profile() {
  return (
 <div>
  <Navbar/>
  <div className="container">
    <h1>Mon profil</h1>
    <form>
      <label htmlFor="nom">Nom :</label>
      <input type="text" id="nom" name="nom" defaultValue="Dupont" className="form-control" readOnly />
      <label htmlFor="prenom">Prénom :</label>
      <input type="text" id="prenom" name="prenom" defaultValue="Jean" className="form-control" readOnly />
      <label htmlFor="email">Email :</label>
      <input type="email" id="email" name="email" defaultValue="jean.dupont@example.com" className="form-control" readOnly />
      <label htmlFor="abonnement">Type d'abonnement :</label>
      <input type="text" id="abonnement" name="abonnement" defaultValue="Premium" className="form-control" readOnly />
      <label htmlFor="date-abonnement">Date d'abonnement :</label>
      <input type="text" id="date-abonnement" name="date-abonnement" defaultValue="22/04/2023" className="form-control" readOnly />
      <button  type="submit" className="btn btn-primary d-block mx-auto">Annuler l'abonnement</button>
    </form>
  </div>
</div>

  )
}

export default profile