import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./reset.scss"
import MainProvider from './context/mainProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainProvider>
      <App />
    </MainProvider>
  </React.StrictMode>
);

