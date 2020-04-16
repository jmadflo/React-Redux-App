import { UPDATE_SEARCH_FORM } from '../actionCreators/mainActions'

export const initialState = {
    data: [],
    baseCurrency: 'USD',
    quoteCurrency: 'EUR',
    date: ''
}

export const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_SEARCH_FORM:
            return {
                ...state,
                searchText: action.payload.name === 'searchText' ? action.payload.value : state.searchText,
                searchSection: action.payload.name === 'searchSection' ? action.payload.value : state.searchSection
            }
        default:
            return state
    }
}