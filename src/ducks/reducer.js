import axios from 'axios';

const initialState = {
    user: {}
}

const ADD_FRIEND = 'ADD_FRIEND';
const GET_FRIENDS = 'GET_FRIEND';
const GET_USER_INFO = 'GET_USER_INFO';
const UPDATE_USER = 'UPDATE_USER';
const REMOVE_FRIEND = 'REMOVE_FRIEND';

export function addFriend(){
    //assign payload to a variable, this wll be an axios.post
    return {
        type: ADD_FRIEND,
    }
}

export function getFriends(){
    //assign payload to a variable, this wll be an axios.get
    return {
        type: GET_FRIENDS,
    }
}

export function getUserInfo(){
    //assign payload to a variable, this wll be an axios.get
    return {
        type: GET_USER_INFO,
    }
}

export function updateUser(){
    //assign payload to a variable, this wll be an axios.patch
    return {
        type: UPDATE_USER,
    }
}

export function removeFriend(){
    //assign payload to a variable, this wll be an axios.delete
    return {
        type: REMOVE_FRIEND,
    }
}

export default function reducer(state = initialState, action){
    switch (action.type) {

        default:
            return state;
    }
}