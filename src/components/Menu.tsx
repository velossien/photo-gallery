import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import GalleryContext from '../context/GalleryContext';

const Menu = () => {
  const { menuOpen, setMenuOpen } = useContext(GalleryContext);
 
  const translationAmount = (open: boolean) => {
    return open ? '0' : '100%';
  };

  return (
    <nav 
      className="styled-menu"
      style={{transform: `translateX(${translationAmount(menuOpen)})`}}
    >
      <NavLink
        className="nav-link"
        activeClassName="active"
        activeStyle={{
          color: '#35B2D1',
        }}
        onClick={() => { setMenuOpen(false) }}
        to="/gallery"
      >
        gallery
      </NavLink>
      <NavLink
        className="nav-link"
        activeClassName="active"
        activeStyle={{
          color: '#35B2D1',
        }}
        onClick={() => { setMenuOpen(false) }}
        to="/about"
      >
        about
      </NavLink>
    </nav>
  )
};

export default Menu;
