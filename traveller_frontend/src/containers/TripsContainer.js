import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import TripInput from '../components/TripInput';
import Trips from '../components/Trips';
import Trip from '../components/Trip';
import { fetchTrips } from '../actions/fetchTrips';
import Home from '../components/Home';
import Navbar from '../components/Navbar';

class TripsContainer extends Component {

    componentDidMount() {
        this.props.fetchTrips()
    }

    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/trips/new" component={TripInput} />
                    <Route path="/trips/:id" render={(routerProps) => <Trip {...routerProps} trips={this.props.trips} />} />
                    <Route path="/trips" render={(routerProps) => <Trips {...routerProps} trips={this.props.trips} />} />
                </Switch>
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