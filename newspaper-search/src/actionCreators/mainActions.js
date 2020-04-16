import axios from 'axios'
// import { useSelector } from 'react-redux'

const stateDate = useSelector(state => state.date)
const statebaseCurrency = useSelector(state => state.baseCurrency)

export const UPDATE_SEARCH_FORM = 'update_search'
export const UPDATE_RENDERED_DATA = 'update_rendered_data'

export const updateSearchForm = (update) => {
    return { type: UPDATE_SEARCH_FORM, payload: update }
}

export const updateRenderedData = (date, baseCurrency) => dispatch => {
    console.log(date, baseCurrency)
    axios.get()
        .then(response => {
            console.log(response)
            dispatch({type: UPDATE_RENDERED_DATA, payload: response})
        })
        .catch(error => console.log(error))

    // axios.get(`https://chroniclingamerica.loc.gov/search/titles/results/?terms=michigan`)
    //     .then(response => {
    //         console.log(response)
    //         dispatch({type: UPDATE_RENDERED_DATA, payload: response})
    //     })
    //     .catch(error => console.log(error))

    
    
}