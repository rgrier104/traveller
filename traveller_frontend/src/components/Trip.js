import React from 'react';
import RecommendationsContainer from '../containers/RecommendationsContainer';

const Trip = ({trip}) => {

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