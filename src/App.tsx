import React, { useEffect } from 'react';
import Navbar from './components/navbar';
import Router from './router';
import { useAuth } from './useAuth';
import Cookies from 'js-cookie';
import api from './api/api';
import { AxiosError } from 'axios';
import { useLocation } from 'react-router-dom';

function App() {
    //get cookie from 
  return (
    <>
      <Navbar />
      <Router />
    </>
  );
}

export default App;
