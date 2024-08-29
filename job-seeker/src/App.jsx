import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Welcome_page from './components/welcome_page/Welcome_page';
import Signup from './components/sign-up/Signup';
import Footer from './components/footer/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<><Welcome_page /></>} />
        <Route path="/welcome" element={<Welcome_page />} />
        <Route path="/signup" element={<Signup />} />
      
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
