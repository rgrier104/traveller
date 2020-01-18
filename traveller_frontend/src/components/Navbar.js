import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <NavLink to="/" className="home" exact><h1>Traveller</h1></NavLink>
                    <h4>"Not all who wander are lost" - J.R.R. Tolkien</h4>
                </div>
                

                <div className="nav-container">
                    <NavLink className="navlink" activeClassName="active-route" to="/trips/" exact>All Trips</NavLink>
                    <NavLink className="navlink" activeClassName="active-route" to="/trips/completed" exact>Past Trips</NavLink>
                    <NavLink className="navlink" activeClassName="active-route" to="/trips/upcoming" exact>Upcoming Trips</NavLink>
                    <NavLink className="navlink" activeClassName="active-route" to="/trips/bucketlist" exact>Bucket List Trips</NavLink>
                    <NavLink className="navlink" activeClassName="active-route" to="/trips/new" exact>Add a New Trip</NavLink>
                </div>
            </div>
        )
    }
}

export default Navbar;