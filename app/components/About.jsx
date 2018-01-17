import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onOpenAbout();
    };

    render() {
        return (
            <div>
                <div className="about">
                    <div className="image-box-1">
                        <img alt="A young creative woman smiling at a PAX convention" className="pax-me-img" src="https://s3.amazonaws.com/taragrimm.com/images/paxme.jpg" />
                    </div>

                    <div className="about-block">
                        <p className="center">
                            Hi! I’m Tara Grimm - web developer and photographer.  I’ve been interested in web development since I can remember, but college&#8209;me decided being a doctor would be cooler.
                        </p>
                        <p className="center">
                            After getting a Doctorate in Optometry (has to do with eyeballs) - I practiced for a few years until I decided enough was enough and I made a lifetime hobby into a career. 
                        </p>
                        <p className="center">
                            I am now looking for new&nbsp;opportunities:&nbsp;<a href="https://s3.amazonaws.com/taragrimm.com/images/resume-grimm.pdf">R&#233;sum&#233;</a>
                        </p>
                        <div className="box-of-icons">
                            <a href="mailto:taragrimm.js@gmail.com"><div className="social-icons" id="email"></div></a>
                            <a href="https://twitter.com/velossien"><div className="social-icons" id="twitter"></div></a>
                            <a href="https://www.instagram.com/velossien"><div className="social-icons" id="instagram"></div></a>
                            <a href="https://www.linkedin.com/in/tara-roche-grimm/"><div className="social-icons" id="linkedin"></div></a>
                            <a href="https://github.com/velossien"><div className="social-icons" id="github"></div></a>
                        </div>
                    </div>
                    

                    {/* <div className="about-block-2">
                        <div className="about-block">
                            <p className="center">
                                I work with mainly React, but I have been learning more technologies such as NodeJs and Ruby on Rails.  
                            </p>
                        </div>
                    </div>
                    <div className="image-box-2">
                        <img className="camera-me-img" alt="a young photographer taking a photograph of a japanese temple" src="https://s3.amazonaws.com/taragrimm.com/images/camerame.jpg" />
                    </div> */}
                </div>

                <div className="copyright contact-copy">
                    &copy; 2017 Grimm
                </div>
            </div>
        );
    }
}