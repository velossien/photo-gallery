import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

const PhotoGallery = () => {
  return (
    <>
      <Router>
        <div>
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
    </>
  );
};

export default PhotoGallery;
