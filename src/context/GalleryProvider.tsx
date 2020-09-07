// This component will hold any global state and global state change handlers
import React, { useState, useEffect } from 'react';
import DashboardContext from './GalleryContext';

interface Props {
  children: React.ReactNode[] | React.ReactNode;
}

const GalleryProvider = ({ children }: Props) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  // Set screen width booleans
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 560);

  const updateWidthAndHeight = () => {
    setIsMobile(window.innerWidth <= 560);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        isMobile,
        setMenuOpen,
        menuOpen
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
};

export default GalleryProvider;
