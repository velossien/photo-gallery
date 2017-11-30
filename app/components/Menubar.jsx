import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import Gallery from '../components/Gallery.jsx';
import About from '../components/About.jsx';

export default class Menubar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="menubar">
                <ul>
                    <li className="title-block"><Link to="/Gallery">
                        <div>
                            <h1> <span className="accent">t</span>ara <span className="accent">g</span>rimm </h1>
                        </div>
                    </Link></li>
                    <div className="nav-bar">
                        <li><NavLink activeClassName='active' to="/Gallery">gallery</NavLink></li>
                        <li><NavLink activeClassName='active' to="/About">about</NavLink></li>
                    </div>
                </ul>
            </div>
        )
    };
};