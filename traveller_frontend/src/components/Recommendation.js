import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteRecommendation } from '../actions/deleteRecommendation';

class Recommendation extends Component {

    handleClick = () => {
        this.props.deleteRecommendation(this.props.recommendation.id, this.props.recommendation.trip_id)
    }

    render() {
        return (
            <div className="rec-card">
                {this.props.recommendation.title}
                <button onClick={this.handleClick}>Delete</button>
            </div>
        )
    }
}

export default connect(null, { deleteRecommendation })(Recommendation);