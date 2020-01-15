import React from 'react';

const Trip = (props) => {

    let trip = props.trips.filter(trip => trip.id === parseInt(props.match.params.id))[0]

    return (
        <div>
            <li>
              {trip ? trip.name : null}
            </li>
        </div>
    )
}

export default Trip;