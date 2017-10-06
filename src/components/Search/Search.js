import React, { Component } from 'react';
import Header from './../Header/Header.js';
import './Search.css';
import homePNG from './../../assets/home.png';
import searchPNG from './../../assets/search.png';
import { Link } from 'react-router-dom';

export default class Search extends Component {
    render() {
        return (
            <div className='container'>

                <nav className="nav_container">
                    <div className="heading_container">
                        <div className='nav_heading'>Helo</div>
                        <Link to='/dashboard'><div><img src={homePNG} alt="" /></div></Link>
                        <Link to='/search'><div><img src={searchPNG} alt="" /></div></Link>
                    </div>
                    <div className="nav_title">Search</div>
                    <div className="logout">Logout</div>
                </nav>


                <div className="mid_container">
                    <div className="friends_container">
                        <div className="search_header">
                            <div><button className="search_dropdown">First Name ▼</button></div>
                            <input className="search_input" />
                            <button className="search_btn">Search</button>
                            <button className="reset_btn">Reset</button>
                        </div>
                        <div className="friends">
                            <div className="friend_box">
                                <img className='avatar' src='robo1.png' />
                                <div className="name">Merissa <br />Pogue</div>
                                <button className='add_friend'>Add Friend</button>
                            </div>
                            <div className="friend_box">
                                <img className='avatar' src='robo2.png' />
                                <div className="name">Virgil <br />Damp</div>
                                <button className='add_friend'>Add Friend</button>
                            </div>
                            <div className="friend_box">
                                <img className='avatar' src='robo3.png' />
                                <div className="name">Joaquin <br />Thorbon</div>
                                <button className='add_friend'>Add Friend</button>
                            </div>
                            <div className="friend_box">
                                <img className='avatar' src='robo4.png' />
                                <div className="name">Nichole <br />Snodden</div>
                                <button className='add_friend'>Add Friend</button>
                            </div>
                            <div className="friend_box">
                                <img className='avatar' src='robo5.png' />
                                <div className="name">Teirtza <br />Broadwood</div>
                                <button className='add_friend'>Add Friend</button>
                            </div>
                            <div className="friend_box">
                                <img className='avatar' src='robo6.png' />
                                <div className="name">Codi <br />Stainer</div>
                                <button className='add_friend'>Add Friend</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}