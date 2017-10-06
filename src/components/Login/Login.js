import React, { Component } from 'react';
import logo from './../../assets/logo.png';

export default class Login extends Component {
        render(){
        return(
            <div className='login'>
                <img src = {logo} alt="winky face"/>
                <a href ='http://localhost:3005/auth'><button>Login / Register</button></a>
            </div>
        )
    }
}