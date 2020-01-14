import React from 'react';
import Trip from './Trip';

const Trips = ({trips}) => {

    return (
        <div>
            <ul>
                {trips.map(trip => <div key={trip.id}><Trip trip={trip} /></div>)}
            </ul>
        </div>
    )
}

export default Trips;