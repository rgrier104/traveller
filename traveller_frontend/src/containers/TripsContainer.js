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
                    <Route path="/trips/completed" render={() => <Trips status={"Completed"} trips={this.props.trips.filter(trip => trip.status === "completed")} />} />
                    <Route path="/trips/upcoming" render={() => <Trips status={"Upcoming"} trips={this.props.trips.filter(trip => trip.status === "upcoming")} />} />
                    <Route path="/trips/bucketlist" render={() => <Trips status={"Bucket List"} trips={this.props.trips.filter(trip => trip.status === "bucketlist")} />} />
                    <Route path="/trips/:id" render={(routerProps) => <Trip trip={this.props.trips.filter(trip => trip.id === parseInt(routerProps.match.params.id))[0]} />} />
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