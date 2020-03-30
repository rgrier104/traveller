export function addRecommendation(data, tripId) {
    return (dispatch) => {
        fetch(`https://traveller-recs-api.herokuapp.com/api/v1/trips/${tripId}/recommendations`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(resp => resp.json())
            .then(trip => {
                if (trip.error) {
                    alert(trip.error)
                } else {
                    dispatch({
                        type: 'ADD_RECOMMENDATION',
                        payload: trip
                    })
                }
            })
    }

}