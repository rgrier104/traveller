import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecommendationInput from '../components/RecommendationInput';
import Recommendations from '../components/Recommendations';

class RecommendationsContainer extends Component {

    render() {
        return (
            <div>
                <RecommendationInput />
                <Recommendations recommendations={this.props.trip && this.props.trip.recommendations} />
            </div>
        )
    }
}

export default RecommendationsContainer