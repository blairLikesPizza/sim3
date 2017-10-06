import React, { Component } from 'react';
import Header from './../Header/Header.js';
import { connect } from 'react-redux';

class Dashboard extends Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo: {},
            recFriends: false
        }
    }


    componentDidMount(){
        // userInfo passed up from props.
    }

    render(){
        return(
            <div className='Dashboard'>
            <Header/>
            <div>I'm the Dashboard</div>
            </div>
        )
    }
}

function mapStateToProps(state){
    
}

export default connect(Dashboard)