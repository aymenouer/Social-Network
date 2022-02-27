import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {AuthContextProvider} from "./context/AuthContext"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>

    <App />
    <ToastContainer />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


