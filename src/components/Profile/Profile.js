import React, { Component } from 'react';
import homePNG from './../../assets/home.png';
import searchPNG from './../../assets/search.png';
import { Link } from 'react-router-dom';


export default class Profile extends Component {
    render() {
        return (
            <div className='Profile'>
                <nav class="nav_container">
                    <div class="heading_container">
                        <div class='nav_heading'>Helo</div>
                        <Link to='/dashboard'><div><img src={homePNG} alt="" /></div></Link>
                        <Link to='/search'><div><img src={searchPNG} alt="" /></div></Link>
                    </div>
                    <div class="nav_title">Dashboard</div>
                    <div class="logout">Logout</div>
                </nav>

                <div>
                    <img src='' />
                    <button>Update</button>
                    <button>Cancel</button>
                </div>
                <div>
                    First Name <input></input>
                    Last Name <input></input>
                </div>

                <div className='gender-drop'>
                    <div>Gender</div>
                    <form>
                    <select name="-- Select --">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Non-Binary">Non-Binary</option>
                    </select>
                    </form>
                </div>

                <div className='hair-color-drop'>
                    <div>Hair Color</div>
                    <form>
                    <select name="-- Select --">
                        <option value="volvo">Brown</option>
                        <option value="saab">Blue</option>
                        <option value="fiat">Green</option>
                        <option value="volvo">Red</option>
                        <option value="saab">Blonde</option>
                        <option value="fiat">White</option>
                    </select>
                    </form>
                </div>

                <div className='eye-color-drop'>
                    <div>Eye Color</div>
                    <form>
                    <select name="-- Select --">
                        <option value="brown">Brown</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                    </select>
                    </form>
                </div>


            </div>
        )
    }
}