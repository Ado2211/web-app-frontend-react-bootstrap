import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import { MainMenu, MainMenuItem } from './components/App/MainMenu/MainMenu';

const menuItems = [
  new MainMenuItem("Home", "/"),
  new MainMenuItem("About us", "/page/about-us/"),
  new MainMenuItem("Contact", "/contact/"),
  new MainMenuItem("Log in", "/user/login/"),
  
];

ReactDOM.render(
  <React.StrictMode>
     <MainMenu items={ menuItems }></MainMenu>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
