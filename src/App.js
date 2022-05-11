import './scss/styles.css'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Models from './pages/Models';
import Colors from './pages/Colors';
import Accessories from './pages/Accessories';
import Summary from './pages/Summary';
import BrandLogo from './components/BrandLogo';
import Navbar from './components/Navbar';

function App() {
  
  return (
    <BrowserRouter>
      {/* children eleman olarak bir container olusuturularak sarmalama yapılabilir */}
      <BrandLogo/>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Models />} />
      <Route path="colors" element={<Colors />} />
      <Route path="accessories" element={<Accessories />} />
      <Route path="summary" element={<Summary />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
