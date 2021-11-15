import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider 
      domain="dev-mkcpp6h3.us.auth0.com" 
      clientId="PgUNZFu3bi10dtiWMw3hmUa8wSSbEGUq" 
      redirectUri={window.location.origin} >
    <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


