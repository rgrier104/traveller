import React, { Component } from 'react';

class TripInput extends Component {

    state = {
        name: '',
        status: ''
    }

    render() {
        return (
            <div>
                <form>
                    <label>Trip Name:</label>
                    <input type="text" name="name" />
                    <label>Status:</label>
                    <select>
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