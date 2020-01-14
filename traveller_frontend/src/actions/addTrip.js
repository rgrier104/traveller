export function addTrip(data) {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/api/v1/trips', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(resp => resp.json())
            .then(data => dispatch({
                type: 'ADD_TRIP',
                payload: data
            }))
    }

}