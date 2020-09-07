import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import GalleryProvider from './context/GalleryProvider';
import MenuBar from './components/MenuBar';

const PhotoGallery = () => {
  return (
    <GalleryProvider>
      <Router>
        <div className="photo-gallery-wrapper">
          <MenuBar />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/gallery" />} />
            <Route exact path="/about">
              <div>About</div>
            </Route>
            <Route exact path="/gallery">
              <div>Gallery</div>
            </Route>
          </Switch>
        </div>
      </Router>
    </GalleryProvider>
  );
};

export default PhotoGallery;
