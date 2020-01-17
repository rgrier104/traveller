import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/trips" exact>All Trips</NavLink>
                <NavLink to="/trips/completed" exact>Completed Trips</NavLink>
                <NavLink to="/trips/upcoming" exact>Upcoming Trips</NavLink>
                <NavLink to="/trips/bucketlist" exact>Bucket List Trips</NavLink>
                <NavLink to="/trips/new" exact>Create New Trip</NavLink>
            </div>
        )
    }
}

export default Navbar;