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
    return {
        type: ADD_FRIEND,
    }
}

export function getFriend(){
    return {
        type: GET_FRIEND,
    }
}

export function getUserInfo(){
    return {
        type: GET_USER_INFO,
    }
}

export function getFriend(){
    return {
        type: GET_FRIEND,
    }
}

export default function reducer(state = initialState, action){

}