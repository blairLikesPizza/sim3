import axios from 'axios';

const initialState = {
    user: {},
    friends: []
}

const ADD_FRIEND = 'ADD_FRIEND';
const GET_FRIENDS = 'GET_FRIENDS';
const GET_USER_INFO = 'GET_USER_INFO';
const UPDATE_USER = 'UPDATE_USER';
const REMOVE_FRIEND = 'REMOVE_FRIEND';

export function getFriends(id){
    const recFriends = axios.get(`/api/recommended/${id}`)
    return {
        type: GET_FRIENDS,
        payload: recFriends
    }
}
export function addFriend(){
    //assign payload to a variable, this wll be an axios.post
    return {
        type: ADD_FRIEND,
    }
}

export function getUserInfo(){
    const userData = axios.get('/auth/me')
    .then (res => {
        return res.data;
    })
    return {
        type: GET_FRIENDS,
        payload: userData
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
        case GET_USER_INFO + "_FULFILLED":
        return Object.assign({}, state, {user: action.payload})

        case GET_FRIENDS + "_FULFILLED":
        return Object.assign({}, state, {friends: action.payload})

        default:
            return state;
    }
}