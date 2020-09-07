// Basic React Context setup
import { createContext } from 'react';

type ContextPropsTypes = { 
  isMobile: boolean,
  menuOpen: boolean,
  setMenuOpen: (menuOpen: boolean) => void
};

const GalleryContext = createContext<ContextPropsTypes>({
  isMobile: false,
  menuOpen: false,
  setMenuOpen: () => {}
});

const GalleryConsumer = GalleryContext.Consumer;

export default GalleryContext;
export { GalleryConsumer };
