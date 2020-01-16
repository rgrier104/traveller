export function addRecommendation(data, tripId) {
    return (dispatch) => {
        fetch(`http://127.0.0.1:3000/api/v1/trips/${tripId}/recommendations`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(resp => resp.json())
            .then(trip => dispatch({
                type: 'ADD_RECOMMENDATION',
                payload: trip
            }))
    }

}