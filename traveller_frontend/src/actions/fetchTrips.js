
export function fetchTrips() {
    return (dispatch) => {
        fetch('https://traveller-recs-api.herokuapp.com/api/v1/trips')
            .then(resp => resp.json())
            .then(data => dispatch({
                type: 'FETCH_TRIPS',
                payload: data
            }))
    }
    
}