import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { FilterProvider } from './context';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
<<<<<<< HEAD
      <ToastContainer closeButton={false} autoClose={3000} position={"bottom-right"}/>
      <App />
=======
      <FilterProvider>
        <App />
      </FilterProvider>
>>>>>>> 20885e82bd08a21d1e2c5bfe2039fad4858b25ae
    </Router>
  </React.StrictMode>
);

