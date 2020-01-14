import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
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
                <Route path="/trips/new" component={TripInput} />
                <Route path="/trips/:id" render={(routerProps) => <Trips {...routerProps} trips={this.props.trips} />} />
                <Route exact path="/trips" render={(routerProps) => <Trips {...routerProps} trips={this.props.trips} />} />
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