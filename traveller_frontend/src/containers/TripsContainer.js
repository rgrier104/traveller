import React, { Component } from 'react';
import { connect } from 'react-redux';
import TripInput from '../components/TripInput';
import Trips from '../components/Trips';
import { fetchTrips } from '../actions/fetchTrips';

class TripsContainer extends Component {

    componentDidMount() {
        this.props.fetchTrips()
    }

    render() {
        return (
            <div>
                <TripInput />
                <Trips trips={this.props.trips} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        trips: state.trips
    }
}

export default connect(mapStateToProps,{fetchTrips})(TripsContainer);