import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './HeaderStyle.module.css';

const Header = () => {
  return (
    <>
      <div className={css.navContainer}>
        <NavLink to="/" className={css.navLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={css.navLink}>
          Movies
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
