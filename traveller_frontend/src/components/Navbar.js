import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <h1>Traveller</h1>
                    <h4>"Not all who wander are lost" - J.R.R. Tolkien</h4>
                </div>
                

                <div className="nav-container">
                    <NavLink className="navlink" activeClassName="active-route" to="/trips/completed" exact>Past Trips</NavLink>
                    <NavLink className="navlink" activeClassName="active-route" to="/trips/upcoming" exact>Upcoming Trips</NavLink>
                    <NavLink className="navlink" activeClassName="active-route" to="/trips/bucketlist" exact>Bucket List Trips</NavLink>
                </div>
            </div>
        )
    }
}

export default Navbar;