/**
 * ************************************
 *
 * @module  Home.jsx
 * @author  Plan It Travel
 * @date    9-2-23
 * @description renders Outlet which routes to the page URL the browser is pointing to
 *
 * ************************************
 */

import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
