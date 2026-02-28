import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './LandingPage.jsx';
import './style.css';

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>,
);

