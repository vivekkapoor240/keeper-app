import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/keeper-app" element={<Layout />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
