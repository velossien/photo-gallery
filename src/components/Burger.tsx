import React, { useContext } from 'react';
import GalleryContext from '../context/GalleryContext';

const Burger = () => {
  const { setMenuOpen, menuOpen } = useContext(GalleryContext);

  return (
    <button
      className="styled-burger" 
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <div style={ menuOpen ? {transform: 'rotate(45deg)'} : {transform: 'rotate(0)'}} />
      <div style={ menuOpen ? {transform: 'translateX(20px)'} : {transform: 'translateX(0)'}} />
      <div style={ menuOpen ? {transform: 'rotate(-45deg)'} : {transform: 'rotate(0)'}} />
    </button>
  )
};

export default Burger;
