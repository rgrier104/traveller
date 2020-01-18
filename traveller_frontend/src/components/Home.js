import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = (props) => {

    return (
        <div>
            <h1>Traveller Home</h1>

            <div className="nav-container">
                <NavLink className="navlink" to="/trips/completed" exact>View Past Trips</NavLink>
                <NavLink className="navlink" to="/trips/upcoming" exact>View Upcoming Trips</NavLink>
                <NavLink className="navlink" to="/trips/bucketlist" exact>View Bucket List Trips</NavLink>
            </div>
        </div>
    )
}

export default Home;