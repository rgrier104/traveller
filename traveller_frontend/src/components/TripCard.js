import React from 'react';
import { NavLink } from 'react-router-dom';

const TripCard = ({ trip }) => {

    return (
        <div>
            <NavLink to={`/trips/${trip.id}`} exact>
                <h3 className="trip-title">{trip ? trip.name : null}</h3>
            </NavLink>
        </div>
    )
}

export default TripCard;