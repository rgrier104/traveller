export function deleteRecommendation(recommendationId, tripId) {
    return (dispatch) => {
        fetch(`https://traveller-recs-api.herokuapp.com/api/v1/trips/${tripId}/recommendations/${recommendationId}`, {
            method: 'DELETE',
        })
            .then(resp => resp.json())
            .then(trip => dispatch({
                type: 'DELETE_RECOMMENDATION',
                payload: trip
            }))
    }

}