import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';  
import StartPage from './StartPage';


function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/StartPage" element={<StartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
