import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
}

class Navbar extends Component {
    render() {
        return (
            <div>
                <NavLink to="/" exact style={link} activeStyle={{ background: 'darkblue' }}>
                    Home
                </NavLink>
                <NavLink to="/trips" exact style={link} activeStyle={{ background: 'darkblue' }}>
                    Trips
                </NavLink>
                <NavLink to="/trips/new" exact style={link} activeStyle={{ background: 'darkblue' }}>
                    Create New Trip
                </NavLink>
            </div>
        )
    }
}

export default Navbar;