import React from 'react';
import RecommendationsContainer from '../containers/RecommendationsContainer';

const Trip = ({trip}) => {

    // let trip = props.trips.filter(trip => trip.id === parseInt(props.match.params.id))[0]

    return (
        <div className="trip-show">
            <div className="trip-show-name">{trip ? trip.name : null}</div>
            <div>
                <RecommendationsContainer trip={trip} />
            </div>
        </div>
    )
}

export default Trip;