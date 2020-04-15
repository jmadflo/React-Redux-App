import { UPDATE_SEARCH_FORM } from '../actionCreators/mainActions'

export const initialState = {
    data: [],
    searchText: '',
    searchSection: ''
}

export const mainReducer = (state = initialState, action) => {
    switch(actions.type) {
        case UPDATE_SEARCH_FORM:
            return {
                ...state,
                searchText: action.payload.name === 'searchText' ? action.payload.value : state.searchInput,
                searchSection: action.payload.name === 'searchSection' ? action.payload.value : state.searchType
            }
        default:
            return state
    }
}