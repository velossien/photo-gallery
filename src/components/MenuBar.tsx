import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import GalleryContext from '../context/GalleryContext';
import Burger from './Burger';
import Menu from './Menu';

const MenuBar = () => {
  const { isMobile, setMenuOpen } = useContext(GalleryContext);

  if (isMobile) {
    return (
      <>
        <div className="menu-bar-container">
          <div 
            className="menu-bar-title-block"
            onClick={() => setMenuOpen(false)}
          >
            <Link to="/gallery" >
              <div>
                <h1>
                  <span className="accent">t</span>ara <span className="accent">g</span>rimm
                </h1>
              </div>
            </Link>
          </div>
          <Burger />
        </div>
        <Menu />
      </>
    );
  } else {
    return( 
      <div className="menu-bar-container">
        <div className="menu-bar-title-block">
          <Link to="/gallery">
            <div>
              <h1 style={{ fontFamily: 'museo-sans' }}>
                <span className="accent">t</span>ara <span className="accent">g</span>rimm
              </h1>
            </div>
          </Link>
        </div>
        <ul className="menu-bar-nav-bar">
          <li className="menu-bar-linkies">
            <NavLink
              className="nav-link"
              activeClassName="active"
              activeStyle={{
                color: '#35B2D1',
              }}
              to="/gallery"
            >
              gallery
            </NavLink>
          </li>
          <li className="menu-bar-linkies">
            <NavLink
              className="nav-link"
              activeClassName="active"
              activeStyle={{
                color: '#35B2D1',
              }}
              to="/about"
            >
              about
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }
};

export default MenuBar;
