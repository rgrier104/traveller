import React from 'react';
import RecommendationsContainer from '../containers/RecommendationsContainer';

const Trip = ({trip}) => {

    // let trip = props.trips.filter(trip => trip.id === parseInt(props.match.params.id))[0]

    return (
        <div>
            <h1>{trip ? trip.name : null} Recommendations</h1>
            <div>
                <RecommendationsContainer trip={trip} />
            </div>
        </div>
    )
}

export default Trip;