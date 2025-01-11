import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';  // Adjust path if necessary
import AboutPage from './pages/Aboutpage';  //
import ServicesPage from './pages/ServicesPage';
import Contactpage from './pages/Contactpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us-nagercoil" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
    </Router>
  );
}

export default App;
