import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';  
import StartPage from './StartPage';
import APIPage from './APIPage';

function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/StartPage" element={<StartPage />} />
        <Route path="/APIPage" element={<APIPage />} />
      </Routes>
    </Router>
  );
}

export default App;
