export function addTrip(data) {
    return (dispatch) => {
        fetch('https://traveller-recs-api.herokuapp.com/api/v1/trips', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    dispatch({
                        type: 'ADD_TRIP',
                        payload: data
                    })
                }
            })
    }

}