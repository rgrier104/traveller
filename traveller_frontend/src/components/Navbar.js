import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <NavLink to="/trips" exact>
                    Trips
                </NavLink>
                <NavLink to="/trips/new" exact>
                    Create New Trip
                </NavLink>
            </div>
        )
    }
}

export default Navbar;