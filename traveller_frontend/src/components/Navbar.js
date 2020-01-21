import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <NavLink to="/" className="home" exact><h1>TRAVELLER</h1></NavLink>
                    <h4>"Not all who wander are lost" - J.R.R. Tolkien</h4>
                </div>
                

                <div className="nav-container">
                    <NavLink className="navlink" activeClassName="active-route" to="/trips/" exact>TRIPS</NavLink>
                    <NavLink className="navlink" activeClassName="active-route" to="/trips/completed" exact>PAST</NavLink>
                    <NavLink className="navlink" activeClassName="active-route" to="/trips/upcoming" exact>UPCOMING</NavLink>
                    <NavLink className="navlink" activeClassName="active-route" to="/trips/bucketlist" exact>BUCKET LIST</NavLink>
                    <NavLink className="navlink" activeClassName="active-route" to="/trips/new" exact>NEW</NavLink>
                </div>
            </div>
        )
    }
}

export default Navbar;