import React, { Component } from 'react';

class TripInput extends Component {

    state = {
        name: '',
        status: ''
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form>
                    <label>Trip Name:</label>
                    <input onChange={this.handleOnChange} type="text" name="name" value={this.state.name} />
                    <label>Status:</label>
                    <select onChange={this.handleOnChange} value={this.state.status} name="status" >
                        <option value="">Please Select an Option</option>
                        <option value="completed">Completed</option>
                        <option value="upcoming">Upcoming</option>
                        <option value="bucketlist">Bucket List</option>
                    </select>
                    <input type="submit" value="Create Trip" />
                </form>
            </div>
        )
    }
}

export default TripInput;