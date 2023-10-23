/**
 * ************************************
 *
 * @module  index.js
 * @author  Plan It Travel
 * @date    9-1-23
 * @description entry point for application. Hangs React app off of #root in index.html
 *
 * ************************************
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Login from './pages/Login';
import Home from './pages/Home';
import Trip from './pages/Trip';
import store from './store';
import styles from './styles/styles.scss'; // eslint-disable-line no-unused-vars

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route index element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/trip' element={<Trip />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={store}>
    <App />
  </Provider>,
);
