//  Reducers are functions that specify how the application's state changes in response to actions
const initialState = {
    matches: [],
    matchDetails: {},
    players: [],
    selectedLeague: 'All',
    searchQuery: '',
    leagues: [],
    loading: false,
    error: null,
}
// the state as the data in this app
const rootreducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_MATCHES':
            return {
                ...state,
                matches: action.payload,
                loading: false,
            }
        case 'FETCH_MATCHES_REQUEST':
            return {
                ...state,
                loading: true,
            }
        case 'FETCH_MATCHES_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case 'FETCH_MATCH_DETAILS':
            return {
                ...state,
                matchDetails: action.payload,
                loading: false,
            }
        case 'FETCH_MATCH_DETAILS_REQUEST':
            return {
                ...state,
                loading: true,
            }
        case 'FETCH_MATCH_DETAILS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case 'FETCH_PLAYERS':
            return {
                ...state,
                players: action.payload,
                loading: false,
            }
        case 'FETCH_PLAYERS_REQUEST':
            return {
                ...state,
                loading: true,
            }
        case 'FETCH_PLAYERS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}

export default rootreducer;

