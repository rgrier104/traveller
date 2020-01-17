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
                <div className="rec-content">
                    <div className="rec-title">
                        {this.props.recommendation.title}
                    </div>
                    <div className="rec-description">
                        {this.props.recommendation.description}
                    </div>
                </div>
                <div className='delete-btn'>
                    <button className="delete-btn" onClick={this.handleClick}>X</button>
                </div>
            </div>
        )
    }
}

export default connect(null, { deleteRecommendation })(Recommendation);