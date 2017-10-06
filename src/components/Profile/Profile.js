import React, { Component } from 'react';
import homePNG from './../../assets/home.png';
import searchPNG from './../../assets/search.png';
import { Link } from 'react-router-dom';
import './Profile.css';


export default class Profile extends Component {
    render() {
        return (
            <div className='container'>


                <nav classNameName="nav_container">
                    <div className="heading_container">
                        <div className='nav_heading'>Helo</div>
                        <Link to='/dashboard'><div><img src={homePNG} alt="" /></div></Link>
                        <Link to='/search'><div><img src={searchPNG} alt="" /></div></Link>
                    </div>
                    <div className="nav_title">Search</div>
                    <div className="logout">Logout</div>
                </nav>

                <div className="mid_container">
                    <div className="profile_box">
                        <div className="img_frame">
                            <img className='avatar' src='me.png' />
                        </div>
                        <div>
                            <button className="update_btn">Update</button>
                            <button className="cancel_btn">Cancel</button>
                        </div>
                    </div>
                    <div className="friends_container">
                        <div className="column1">
                            <div className='FL_names'>
                                First Name <input></input>
                                Last Name <input></input>
                            </div>
                            <div className='gender-drop'>
                                <div>Gender</div>
                                <br />
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
                                <br />
                                <form>
                                    <select name="-- Select --">
                                        <option value="brown">Brown</option>
                                        <option value="blue">Blue</option>
                                        <option value="green">Green</option>
                                        <option value="red">Red</option>
                                        <option value="blonde">Blonde</option>
                                        <option value="white">White</option>
                                    </select>
                                </form>
                            </div>
                            <div className='eye-color-drop'>
                                <div>Eye Color</div>
                                <br />
                                <form>
                                    <select name="-- Select --">
                                        <option value="brown">Brown</option>
                                        <option value="blue">Blue</option>
                                        <option value="green">Green</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                        <div className="column1">
                            <div className='hobby-drop'>
                                <div>Hobby</div>
                                <br />
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
                                <br />
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
                                <br />
                                <form>
                                    <select name="-- Select --">
                                        <option value="november">November</option>
                                        <option value="october">October</option>
                                        <option value="may">May</option>
                                        <option value="January">January</option>
                                    </select>
                                </form>
                            </div>
                            <div className='birth-year-drop'>
                                <div>Year</div>
                                <br />
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
                    </div>
                </div>
            </div>
        )
    }
}