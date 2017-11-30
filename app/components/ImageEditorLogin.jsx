import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class ImageEditorLogin extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="Admin">
                <h1> Admin Page</h1>

                <form className="center">
                    <p>Password</p>
                    <input type="text" name="password" />
                    <Link to="/ImageEditorMain">
                        <button className="center"> Sign in</button>
                    </Link>
                </form>

                <div className="copyright">
                    <p>&copy; 2017 Grimm</p>
                </div>
            </div>
        );
    };
};