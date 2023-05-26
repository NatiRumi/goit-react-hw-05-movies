import React, { Suspense } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="container">
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
