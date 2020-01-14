import React from 'react';

const Trip = ({ trip }) => {

    return (
        <div>
            <li>
              {trip.name}
            </li>
        </div>
    )
}

export default Trip;