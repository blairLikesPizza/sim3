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

                <div className='hobby-drop'>
                    <div>Hobby</div>
                    <form>
                        <select name="-- Select --">
                            <option value="video games">Video Games</option>
                            <option value="hiking">Hiking</option>
                            <option value="fishing">Fishing</option>
                            <option value="rafting">Rafting</option>
                        </select>
                    </form>
                </div>

                <div className='hobby-drop'>
                    <div>Hobby</div>
                    <form>
                        <select name="-- Select --">
                            <option value="video games">Video Games</option>
                            <option value="hiking">Hiking</option>
                            <option value="fishing">Fishing</option>
                            <option value="rafting">Rafting</option>
                        </select>
                    </form>
                </div>

                <div className='birth-day-drop'>
                    <div>Birthday Day</div>
                    <form>
                        <select name="-- Select --">
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                        </select>
                    </form>
                </div>

                <div className='birth-month-drop'>
                    <div>Month</div>
                    <form>
                        <select name="-- Select --">
                            <option value="november">November</option>
                            <option value="october">October</option>
                            <option value="may">May</option>
                            <option value="January">January</option>
                        </select>
                    </form>
                </div>

                <div className='birth-month-drop'>
                    <div>Year</div>
                    <form>
                        <select name="-- Select --">
                            <option value="1992">1992</option>
                            <option value="1994">1994</option>
                            <option value="1995">1995</option>
                            <option value="1988">1988</option>
                        </select>
                    </form>
                </div>


            </div>
        )
    }
}