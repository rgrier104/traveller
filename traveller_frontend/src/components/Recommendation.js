import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteRecommendation } from '../actions/deleteRecommendation';

class Recommendation extends Component {

    handleClick = () => {
        this.props.deleteRecommendation(this.props.recommendation.id, this.props.recommendation.trip_id)
    }

    render() {
        return (
            <div>
                <li key={this.props.recommendation.id}>
                    {this.props.recommendation.title}
                    <button onClick={this.handleClick}>Delete</button>
                </li>
            </div>
        )
    }
}

export default connect(null, { deleteRecommendation })(Recommendation);