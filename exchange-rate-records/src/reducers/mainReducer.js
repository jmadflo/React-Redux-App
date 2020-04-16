import { UPDATE_SEARCH_FORM, UPDATE_DATE, SUBMIT_SEARCH } from '../actionCreators/mainActions'
import { formatDate } from '../App'

export const initialState = {
    data: [{base: 'base', quote: 'quote', date: 'year/month/date', rate: 'rate'}],
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
                date: formatDate(new Date(action.payload))
            }
        case SUBMIT_SEARCH:
            return {
                ...state,
                data: [...state.data, { base: state.baseCurrency, quote: state.quoteCurrency, date: state.date, rate: Object.values(action.payload)[0] }]
            }
        default:
            return state
    }
}