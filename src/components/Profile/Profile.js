import React, { Component } from 'react';
import Header from './../Header/Header.js';

export default class Profile extends Component {
    render() {
        return (
            <div className='Profile'>
                <Header />
                <div>I am the Profile Component</div>
            </div>
        )
    }
}