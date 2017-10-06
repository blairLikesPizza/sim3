import React, { Component } from 'react';
import logo from './../../assets/logo.png';
import './Login.css';

export default class Login extends Component {
    render() {
        return (
            <div class='main_container'>
                <div class="login_container">
                    <div><img src={logo} alt="" /></div>
                    <div class="title">Helo</div>
                    <a href='http://localhost:3005/auth'><button class="login_btn">Login / Register</button></a>
                </div>
            </div>
        )
    }
}

