import React from 'react';
import { Link } from 'react-router-dom';

const Trips = ({trips}) => {

    return (
        <div>
            <ul>
                {trips.map(trip =>
                    <div key={trip.id}>
                        <Link to={`/trips/${trip.id}`}>{trip.name}</Link>
                    </div>)}
            </ul>
        </div>
    )
}

export default Trips;