import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screan/Home';
import Category from './screan/Category';
import Welcome from './screan/Welcome';
import Profile from './screan/profile';
import Footer from './welcome-pages/Footer';
import CatCard1 from './screan/CatCard1';
import CatCard2 from './screan/CatCard2';
import CatCard3 from './screan/CatCard3';
import CatCard4 from './screan/CatCard4';
import Balanc from './screan/Balanc';
import Bloge from './screan/Bloge';
import Notification from './com/Notfication';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleStartClick = () => {
    setShowWelcome(false);
  };

  return (
    <div className='bg-[#020917]'>
      <Router>
        {showWelcome ? (
          <Welcome onStartClick={handleStartClick} />
        ) : (
          <>
            <Home /> {/* Home component with navigation will appear on every screen */}
            <Routes>
              <Route path="/" element={<Category />} />
              <Route path="/cat1" element={<CatCard1 />} />
              <Route path="/cat2" element={<CatCard2 />} />
              <Route path="/cat3" element={<CatCard3 />} />
              <Route path="/cat4" element={<CatCard4 />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Balanc" element={<Balanc />} />
              <Route path="/Bloge" element={<Bloge />} />
              <Route path="/Not" element={<Notification />} />
            </Routes>
          </>
        )}
      </Router>
    </div>
  );
};

export default App;
