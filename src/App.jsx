import React from "react";
import Home from './pages/Home/Home.jsx';
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element />
      </Routes>
      <Home />
    </div>
  );
};

export default App;
