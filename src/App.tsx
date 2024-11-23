import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CelticCross from './pages/CelticCross';
import StarSpread from './pages/StarSpread';
import LoveReading from './pages/LoveReading';
import TimeReading from './pages/TimeReading';
import YesNo from './pages/YesNo';
import LanguageSelector from './components/LanguageSelector';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
        <Navbar />
        <LanguageSelector />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tirada-celta" element={<CelticCross />} />
          <Route path="/tirada-estrella" element={<StarSpread />} />
          <Route path="/tirada-amor" element={<LoveReading />} />
          <Route path="/tirada-tiempo" element={<TimeReading />} />
          <Route path="/si-o-no" element={<YesNo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;