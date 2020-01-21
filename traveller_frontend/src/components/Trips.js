import React from 'react';
import TripCard from './TripCard';

const Trips = ({trips}) => {

    return (

        <div className="trip-title-card">
            {trips.map(trip =>
                <div className="trip-title" key={trip.id}>
                    <TripCard trip={trip} />
                </div>)}
        </div>
    )
}

export default Trips;