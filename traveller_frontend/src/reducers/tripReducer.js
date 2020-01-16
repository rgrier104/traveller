
export default function tripReducer(state = { trips: [] }, action) {
    switch (action.type) {
        case 'FETCH_TRIPS':
            return { trips: action.payload }
        case 'ADD_TRIP':
            return { ...state, trips: [...state.trips, action.payload] }
        case 'ADD_RECOMMENDATION':
            let trips = state.trips.map(trip => trip.id === action.payload.id ? action.payload : trip)
            return { ...state, trips: trips }
        case 'DELETE_RECOMMENDATION':
            let tripsDelete = state.trips.map(trip => trip.id === action.payload.id ? action.payload : trip)
            return { ...state, trips: tripsDelete }
        default:
            return state
    }

}