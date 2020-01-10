
export function fetchTrips() {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/api/v1/trips')
            .then(resp => resp.json())
            .then(data => dispatch({
                type: 'FETCH_TRIPS',
                payload: data
            }))
    }
    
}