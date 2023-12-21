import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Header;