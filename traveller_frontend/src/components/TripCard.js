import React from 'react';
import { NavLink } from 'react-router-dom';

const TripCard = ({ trip }) => {

    return (
        <div>
            <NavLink className="navlink" to={`/trips/${trip.id}`} exact>
                {trip ? trip.name : null}
            </NavLink>
        </div>
    )
}

export default TripCard;