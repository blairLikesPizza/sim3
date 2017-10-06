import React, { Component } from 'react';
import Header from './../Header/Header.js';

export default class Search extends Component {
    render() {
        return (
            <div className='Search'>
                <Header />
                <div>I am the Search Component</div>
            </div>
        )
    }
}