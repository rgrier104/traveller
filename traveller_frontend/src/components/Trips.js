import React from 'react';
import { Link } from 'react-router-dom';
import TripCard from './TripCard';

const Trips = ({status,trips}) => {

    return (

        <div className="trip-title-card">
            {trips.map(trip =>
                <div key={trip.id}>
                    <TripCard trip={trip} />
                </div>)}
        </div>
    )
}

export default Trips;