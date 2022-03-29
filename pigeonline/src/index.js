import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import {BrowserRouter,Routes, Route } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path='/register' element={<RegisterPage />}></Route>
      <Route path='/' element={<LoginPage />}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
,
  document.getElementById('root')
);

