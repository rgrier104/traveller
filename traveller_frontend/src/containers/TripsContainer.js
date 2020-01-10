import React, { Component } from 'react';
import TripInput from '../components/TripInput';
import Trips from '../components/Trips';

class TripsContainer extends Component {
    render() {
        return (
            <div>
                <TripInput />
                <Trips />
            </div>
        )
    }
}

export default TripsContainer;