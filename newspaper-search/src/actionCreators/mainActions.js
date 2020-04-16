import axios from 'axios'

export const UPDATE_SEARCH_FORM = 'update_search_form'
export const UPDATE_DATE = 'update_date'
export const SUBMIT_SEARCH = 'submit_search'

export const updateSearchFormAction = (update) => {
    return { type: UPDATE_SEARCH_FORM, payload: update }
}

export const updateDateAction = (date) => {
    return {type: UPDATE_DATE, payload: date}
}

export const submitSearchAction = (baseCurrency, quoteCurrency, date) => dispatch => {
    console.log(baseCurrency, date)

    axios.get(`https://api.exchangeratesapi.io/${date.replace(/\//g, '-')}?base=${baseCurrency}&symbols=${quoteCurrency}`)
        .then(response => {
            console.log(response)
            // dispatch({type: SUBMIT_SEARCH, payload: response})
        })
        .catch(error => console.log(error))
}