import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage.jsx';  
import AboutPage from './pages/Aboutpage';  
import ServicesPage from './pages/ServicesPage';
import Contactpage from './pages/Contactpage';
import ScrollToTop from './components/Scrolltotop.jsx';
import Salespage from './pages/salespage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/about-us-nagercoil-home-appliance-installation" element={<AboutPage />} />
        <Route path="/home-appliance-installation-services-nagercoil" element={<ServicesPage />} />
        <Route path="/contact-home-appliance-installation-nagercoil" element={<Contactpage />} />
        <Route path="/sales" element={<Salespage />} />
      </Routes>
    </Router>
  );
}

export default App;
