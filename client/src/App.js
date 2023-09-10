import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './componenets/dashboard/dashboard';
import Login from './componenets/Login/Login';
import Pricing from './componenets/Pricing/pricing';
import Profile from './componenets/Profile/profile';
import Support from './componenets/Support/support';
import SalledeBain from './componenets/category/salleDeBain';
import Cuisine from './componenets/category/cuisine';
import Toilette from './componenets/category/toilette';
import Salon from './componenets/category/salon';
import Extérieur from './componenets/category/Extérieur Maison';
import Bureau from './componenets/category/Bureau à domicile';
import Dressing from './componenets/category/Dressing';
import Chambre from './componenets/category/Chambre';
import Salleàmanger from './componenets/category/Salle à manger';

function App() {
  return (
    <Router>
      <div>
        <body>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/support" element={<Support />} />
          {/* category */}
          <Route path="/Sdb" element={<SalledeBain />} />
          <Route path="/cuisine" element={<Cuisine />} />
          <Route path="/toilette" element={<Toilette />} />
          <Route path="/salon" element={<Salon />} />
          <Route path="/Extérieur" element={<Extérieur />} />
          <Route path="/Bureau" element={<Bureau />} />
          <Route path="/dressing" element={<Dressing />} />
          <Route path="/Chambre" element={<Chambre />} />
          <Route path="/Salleàmanger" element={<Salleàmanger />} />
          {/* <Route path="/Sdb" element={<SalledeBain />} />
          <Route path="/Sdb" element={<SalledeBain />} />
          <Route path="/Sdb" element={<SalledeBain />} />
          <Route path="/Sdb" element={<SalledeBain />} />
          <Route path="/Sdb" element={<SalledeBain />} />
          <Route path="/Sdb" element={<SalledeBain />} />
          <Route path="/Sdb" element={<SalledeBain />} />
          <Route path="/Sdb" element={<SalledeBain />} /> */}

          
        </Routes>
        </body>
      </div>
    </Router>
  );
}

export default App;
