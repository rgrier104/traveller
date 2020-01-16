export function deleteRecommendation(recommendationId, tripId) {
    return (dispatch) => {
        fetch(`http://127.0.0.1:3000/api/v1/trips/${tripId}/recommendations/${recommendationId}`, {
            method: 'DELETE',
        })
            .then(resp => resp.json())
            .then(trip => dispatch({
                type: 'DELETE_RECOMMENDATION',
                payload: trip
            }))
    }

}