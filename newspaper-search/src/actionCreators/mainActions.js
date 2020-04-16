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
// export const submitSearch = (date, baseCurrency) => dispatch => {
//     console.log(date, baseCurrency)

//     axios.get()
//         .then(response => {
//             console.log(response)
//             dispatch({type: SUBMIT_SEARCH, payload: response})
//         })
//         .catch(error => console.log(error))
// }