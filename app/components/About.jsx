import React, { Component } from 'react';

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onOpenAbout();
    };

    render() {
        return (
            <div className="about">
                <div className="image1">
                    <img className="pax-me-img" src="https://s3.amazonaws.com/taragrimm.com/images/paxme.jpg"/>
                </div>

                <div className="about-block-1">
                    <p className="center">
                        Hi! I’m Tara Grimm - web developer, designer, and photographer.  I’ve been interested in web development since I can remember, but college&#8209;me decided being a doctor would be cooler.  
                    </p>
                    <p className="center">
                        After getting a Doctorate in Optometry (has to do with eyeballs) - I practiced for a few years until I decided enough was enough and I made a lifetime hobby into a career.  
                    </p>
                    <p className="center">
                        I’ve never looked back.
                    </p>
                </div>

                <div className="about-block-2">
                    <p className="center">
                        This is other stuff I will say.
                    </p>
                </div>
                <div className="image2">
                    <img className="camera-me-img" src="https://s3.amazonaws.com/taragrimm.com/images/camerame.jpg"/>
                </div>

                <p><a href="mailto:taragrimm.js@gmail.com">taragrimm.js@gmail.com</a></p>
                <div className="copyright">
                    &copy; 2017 Grimm 
                        <br/>
                    Spinner powered by <a href="https://loading.io/">loading.io</a>
                </div>
            </div>
        );
    }
}