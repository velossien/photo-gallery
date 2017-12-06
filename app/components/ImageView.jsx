import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import images from "../js/Images.js";
import Swipeable from 'react-swipeable'

export default class ImageView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imgSrc: this.props.match.params.fullSizeSrc,
            loading: true
        };

        this.goBackGallery = this.goBackGallery.bind(this);
        this.previousImage = this.previousImage.bind(this);
        this.nextImage = this.nextImage.bind(this);
        this.handleLoader = this.handleLoader.bind(this);
        this.onSwiped = this.onSwiped.bind(this);
        this.renderLoader = this.renderLoader.bind(this);
    }

    goBackGallery() {
        this.props.history.push('/Gallery');
    }

    previousImage() {
        let currentImageIndex = images.map((img) => img.title).indexOf(this.state.imgSrc);

        let previousImageTitle;
        if (currentImageIndex == 0) {
            previousImageTitle = (images[(images.length) - 1].title);
        } else {
            previousImageTitle = images[(currentImageIndex - 1)].title;
        }

        this.setState({
            imgSrc: previousImageTitle,
            loading: true
        });

        this.props.history.push("/Gallery/" + previousImageTitle);
    }

    nextImage() {
        let currentImageIndex = images.map((img) => img.title).indexOf(this.state.imgSrc);

        let nextImageTitle;
        if (currentImageIndex == (images.length - 1)) {
            nextImageTitle = (images[0].title);
        } else {
            nextImageTitle = images[(currentImageIndex + 1)].title;
        }

        this.setState({
            imgSrc: nextImageTitle,
            loading: true
        });

        this.props.history.push("/Gallery/" + nextImageTitle);
    }

    componentDidMount() {
        this.props.onOpenImageView();
    };

    onSwiped(direction) {
        if (direction === "RIGHT") {
            this.previousImage();
        } else if (direction === "LEFT") {
            this.nextImage();
        }
    }

    handleLoader() {
        this.setState({ loading: false });
    }

    renderLoader() {
        const currentImgSrc = this.state.imgSrc;
        if (!this.state.loading) {
            return <img src={`https://s3.amazonaws.com/taragrimm.com/images/fullsize/${currentImgSrc}`} />
        } else {
            return (
                <div className="loader">
                    <img src="https://s3.amazonaws.com/taragrimm.com/images/double-ring.svg" />
                </div>
            );
        }
    }




    render() {
        const currentImgSrc = this.state.imgSrc;

        return (
            <div className="image-view">
                <div onClick={this.goBackGallery} className="back-button">&#215;</div>
                <div className="img-block">
                    <div onClick={this.previousImage} className="arrow">&#8592;</div>
                    <Swipeable
                        delta={100}
                        onSwipedLeft={() => this.onSwiped("LEFT")}
                        onSwipedRight={() => this.onSwiped("RIGHT")}
                    >
                        {this.renderLoader()}
                    </Swipeable>
                    <div onClick={this.nextImage} className="arrow" >&#8594;</div>
                    <div className="hidden-image-loader">
                        <img
                            onLoad={this.handleLoader}
                            src={`https://s3.amazonaws.com/taragrimm.com/images/fullsize/${currentImgSrc}`} />
                    </div>
                    <div className="btn-block">
                        <div className="mobile-btn-arrow" onClick={this.previousImage}>&#171;</div>
                        <div className="mobile-btn" onClick={this.goBackGallery}>&#215;</div>
                        <div className="mobile-btn-arrow" onClick={this.nextImage}>&#187;</div>
                    </div>
                </div>
            </div>
        );
    }
};