import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import GalleryProvider from './context/GalleryProvider';
import MenuBar from './components/MenuBar';
import Gallery from './components/Gallery';
import About from './components/About';

const PhotoGallery = () => {
  return (
    <GalleryProvider>
      <Router>
        <div className="photo-gallery-wrapper">
          <MenuBar />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/gallery" />} />
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/gallery">
              <Gallery />
            </Route>
          </Switch>
        </div>
      </Router>
    </GalleryProvider>
  );
};

export default PhotoGallery;
