import React from 'react';
import './Logout.css';
import {useDispatch, useSelector} from 'react-redux';
import {logout, selectUser} from '../Features/UserSlice';

const Logout = () => {

    const user = useSelector(selectUser);

    const dispatch = useDispatch();
    const HandleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    };


    return (
        <div className="logout">
            <h1>
                Welcome <span className="username">{user.name}</span>
            </h1>
            <button className="logout-button" onClick={(e) => HandleLogout(e)}>Logout</button>
        </div>
    )
}

export default Logout
