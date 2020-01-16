import React, { Component } from 'react';
import RecommendationInput from '../components/RecommendationInput';
import Recommendations from '../components/Recommendations';

class RecommendationsContainer extends Component {

    render() {
        return (
            <div>
                <RecommendationInput trip={this.props.trip} />
                <Recommendations recommendations={this.props.trip && this.props.trip.recommendations} />
            </div>
        )
    }
}

export default RecommendationsContainer