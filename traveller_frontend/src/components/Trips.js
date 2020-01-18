import React from 'react';
import { Link } from 'react-router-dom';
import Trip from './Trip';

const Trips = ({status,trips}) => {

    return (

        <div>
            {/* <h1>{status} Trips</h1> */}
            <ul>
                {trips.map(trip =>
                    <div key={trip.id}>
                        <Trip trip={trip} />
                    </div>)}
            </ul>
        </div>
    )
}

export default Trips;