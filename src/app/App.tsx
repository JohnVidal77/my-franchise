import React from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

import Router from './Router';

const App: React.FC = () => (
  <>
    <Router />
    <ToastContainer />
  </>
);

export default App;
