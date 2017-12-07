import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import images from "../js/Images.js";
import Swipeable from 'react-swipeable'

export default class ImageView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imgSrc: this.props.match.params.fullSizeSrc,
            loading: true,
            altText: "",
            imageTitles : images.map((img) => img.title)
        }

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
        let currentImageIndex = (this.state.imageTitles).indexOf(this.state.imgSrc);

        let newIndex;
        if (currentImageIndex == 0) {
            newIndex = images.length-1;
            previousImageTitle = (images[(images.length) - 1].title);
        } else {
            newIndex = currentImageIndex-1;
            previousImageTitle = images[(currentImageIndex - 1)].title;
        }

        let previousImageTitle = images[newIndex].title;
        let newAltText = images[newIndex].alt;

        this.setState({
            imgSrc: previousImageTitle,
            loading: true,
            altText: newAltText
        });

        this.props.history.push("/Gallery/" + previousImageTitle);
    }

    nextImage() {
        let currentImageIndex = (this.state.imageTitles).indexOf(this.state.imgSrc);

        let newIndex;
        if (currentImageIndex == (images.length - 1)) {
            newIndex = 0;
        } else {
            newIndex= currentImageIndex + 1;
        }

        let nextImageTitle = images[newIndex].title;
        let newAltText = images[newIndex].alt;

        this.setState({
            imgSrc: nextImageTitle,
            loading: true,
            altText: newAltText
        });

        this.props.history.push("/Gallery/" + nextImageTitle);
    }

    componentDidMount() {
        this.props.onOpenImageView();


        let currentImageIndex = (this.state.imageTitles).indexOf(this.state.imgSrc);
        let newAltText = images[currentImageIndex].alt;

        this.setState({
            altText: newAltText
        })
        
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
        let currentImgSrc = this.state.imgSrc;
        let altText=this.state.altText
        if (!this.state.loading) {
            return <img alt={altText} src={`https://s3.amazonaws.com/taragrimm.com/images/fullsize/${currentImgSrc}`} />
        } else {
            return (
                <div className="loader">
                    <img alt="loading spinner showing the image is still loading" src="https://s3.amazonaws.com/taragrimm.com/images/double-ring.svg" />
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