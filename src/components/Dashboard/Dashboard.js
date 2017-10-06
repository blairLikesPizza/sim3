import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Dashboard.css';
import homePNG from './../../assets/home.png';
import searchPNG from './../../assets/search.png';
import mePNG from './../../assets/me.png';
import { Link } from 'react-router-dom';


class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {},
            recFriends: {}
        }
    }

    render() {
        return (
            <div class='container'>

                <nav class="nav_container">
                    <div class="heading_container">
                        <div class='nav_heading'>Helo</div>
                        <Link to='/dashboard'><div><img src={homePNG} alt="" /></div></Link>
                        <Link to='/search'><div><img src={searchPNG} alt="" /></div></Link>
                    </div>
                    <div class="nav_title">Dashboard</div>
                    <div class="logout">Logout</div>
                </nav>


                <div class="mid_container">

                    <div class='marina'>
                        <div class="profile_box">
                            <div class="img_frame">
                                <img class='avatar' src={mePNG} alt="" />
                            </div>
                            <Link to='/profile'><button class="edit_btn" >Edit Profile</button></Link>
                        </div>

                        <div class="desc_box">Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name. The more
                    you update your profile, the better recommendations we can make!</div>

                    </div>

                    <div class="friends_container">
                        <div class="RF_header">
                            <div class="RF_title">Recommended Friends</div>
                            <div>Sorted by <button>First Name ▼</button></div>
                        </div>

                        <div class="friends">No recommendations</div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Dashboard