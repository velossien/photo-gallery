import React, { Component } from 'react';
import images from "../js/Images.js";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onOpenGallery();
    };

    nextImage(){

    }

    render() {
        return (
            <div>
                <div className="gallery">
                    <GalleryList
                        images={images}
                    />
                </div>
                <div className="copyright">
                    <p>&copy; 2017 Grimm</p>
                </div>
            </div>
        );
    };
};

class GalleryList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let imageList = this.props.images.map(((obj) => {
            return (
                <Image
                    title={obj.title}
                    thumbnailSrc={obj.thumbnailSrc}
                    fullSizeSrc={obj.fullSizeSrc}
                    key={obj.orderId}
                    id={obj.orderId}
                />
            );
        }));
        return (
            <div className="imageList">
                {imageList}
            </div>
        );
    };
};

class Image extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link to={"/Gallery/" + this.props.title}><img className="image" src={this.props.thumbnailSrc} /></Link>
        );
    };
};

Image.propTypes = {
    thumbnailSrc: PropTypes.string.isRequired,
    fullSizeSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};