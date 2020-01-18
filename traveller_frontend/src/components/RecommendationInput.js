import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecommendation } from '../actions/addRecommendation';

class RecommendationInput extends Component {

    state = {
        title: '',
        description: ''
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addRecommendation(this.state, this.props.trip.id)
        this.setState({
            title: '',
            description: ''
        })
    }

    render() {
        return (
            <div>
                <form className="rec-form" onSubmit={this.handleSubmit}>
                    <label>Recommendation:</label>
                    <input onChange={this.handleOnChange} type="text" name="title" value={this.state.title} />
                    <label>Notes:</label>
                    <textarea onChange={this.handleOnChange} name="description" value={this.state.description} />
                    <input className="submit" type="submit" value="Add Recommendation" />
                </form>
            </div>
        )
    }
}

export default connect(null, { addRecommendation })(RecommendationInput);