import React from 'react';
import RecommendationsContainer from '../containers/RecommendationsContainer';

const Trip = (props) => {

    let trip = props.trips.filter(trip => trip.id === parseInt(props.match.params.id))[0]

    return (
        <div>
            {trip ? trip.name : null}
            <div>
                <RecommendationsContainer trip={trip} />
            </div>
        </div>
    )
}

export default Trip;