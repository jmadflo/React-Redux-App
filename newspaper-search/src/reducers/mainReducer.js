import { UPDATE_SEARCH_FORM, UPDATE_DATE } from '../actionCreators/mainActions'
import { formatDate } from '../App'

export const initialState = {
    data: [],
    baseCurrency: 'USD',
    quoteCurrency: 'EUR',
    date: formatDate(new Date())
}

export const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_SEARCH_FORM:
            return {
                ...state,
                baseCurrency: action.payload.id === 'baseCurrency' ? action.payload.value : state.baseCurrency,
                quoteCurrency: action.payload.id === 'quoteCurrency' ? action.payload.value : state.quoteCurrency,
            }
        case UPDATE_DATE:
            return {
                ...state,
                date: new Date(action.payload)
            }
        default:
            return state
    }
}