import React, { useState, useEffect, useCallback } from 'react';
import PhotoGallery from 'react-photo-gallery';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import axios from 'axios';
import { ImageType } from "../service/types";

const IMAGEURL = 'https://s3.amazonaws.com/kevingrimm.com/images.json';

const Gallery = () => {
  const [imageIndex, setimageIndex] = useState<number>(0);
  const [viewerIsOpen, setViewerIsOpen] = useState<boolean>(false);
  const [images, setImages] = useState<ImageType[]>([]);

  useEffect(() => {
    axios.get(IMAGEURL).then(res => {
      setImages(res.data);
    });
  }, []);

  const openLightbox = useCallback((_event, { _photo, index }) => {
    setimageIndex(index);
    setViewerIsOpen(true);
  }, []);

  // const columns = (containerWidth: number) => {
  //   let columns = 2;
  //   if (containerWidth >= 768) columns = 3;
  //   if (containerWidth >= 1000) columns = 4;
  //   if (containerWidth >= 1200) columns = 6;
  //   return columns;
  // };

  if (images.length == 0) return <div> loading </div>;

  return (
    <div className="gallery-container">
      <PhotoGallery 
        photos={images}
        onClick={openLightbox}
        margin={5}
      />
      {viewerIsOpen && (
        <Lightbox
          mainSrc={images[imageIndex].fullSizeSrc}
          nextSrc={images[(imageIndex + 1) % images.length].fullSizeSrc}
          prevSrc={images[(imageIndex + images.length - 1) % images.length].fullSizeSrc}
          onCloseRequest={() => setViewerIsOpen(false)}
          onMovePrevRequest={() => setimageIndex((imageIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setimageIndex((imageIndex + 1) % images.length)}
        />
      )}
    </div>
  );
};

export default Gallery;
