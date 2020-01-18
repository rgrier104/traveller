import React from 'react';
import { Link } from 'react-router-dom';

const Trips = ({status,trips}) => {

    return (

        <div>
            {/* <h1>{status} Trips</h1> */}
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