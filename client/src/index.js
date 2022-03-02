import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {AuthContextProvider} from "./context/Auth/AuthContext"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PostsContextProvider } from './context/Posts/PostsContext';
ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <PostsContextProvider>

    <App />
        </PostsContextProvider>
    <ToastContainer />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


