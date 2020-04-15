import React from 'react'
import { updateSearchForm } from '../actionCreators/mainActions'

const SearchForm = props => {
    return (
        <form>
            <input name='searchText' type='text' value={props.searchInput} onChange={props.updateForm}/>
            <select name='searchSection' onChange={props.updateForm}>
                <option value='title'>Title</option>
                <option value='body'>Body</option>
            </select>
            <button></button>
        </form>
    )
}

export default SearchForm