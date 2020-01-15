import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        // this.props.addTrip(this.state)
        this.setState({
            title: '',
            description: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Recommendation:</label>
                    <input onChange={this.handleOnChange} type="text" name="title" value={this.state.title} />
                    <label>Descritpion:</label>
                    <input onChange={this.handleOnChange} type="text" name="description" value={this.state.description} />
                    <input type="submit" value="Create Trip" />
                </form>
            </div>
        )
    }
}

export default connect(null)(RecommendationInput);