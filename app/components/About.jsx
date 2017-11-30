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
            <div className="About">
                <img className="my-img" src=""/>
                <div className="about-block">
                    <p className="center">It's me!</p>
                </div>
                <ul>
                    <li>Stuff</li>
                    <li>More Stuff</li>
                </ul>
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