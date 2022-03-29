import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginPage from './LoginPage';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<RegisterPage />}></Route>
      <Route path='/' element={<LoginPage />}></Route>
    </Routes>
    <LoginPage />
  </React.StrictMode>
,
  document.getElementById('root')
);

