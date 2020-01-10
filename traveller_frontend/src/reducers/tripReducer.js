
export default function tripReducer(state = { trips: [] }, action) {
    switch (action.type) {
        case 'FETCH_TRIPS':
            return { trips: action.payload }
        default:
            return state
    }

}