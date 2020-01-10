import React from 'react';

const Trips = ({trips}) => {

    return (
        <div>
            <ul>
                {trips.map(trip => <li key={trip.id}>{trip.name}</li>)}
            </ul>
        </div>
    )
}

export default Trips;