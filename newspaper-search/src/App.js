import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateSearchForm } from './actionCreators/mainActions'
import SearchForm from './components/SearchForm'

import './App.css'

function App() {
  const dispatch = useDispatch()
  const searchInput = useSelector(state => state.searchInput)
  const searchSection = useSelector(state => state.searchForm)
  const data = useSelector(state => state.data)

  const updateForm = event => {
    dispatch(updateSearchForm({name: event.target.name, value: event.target.value}))
  }

  return (
    <div className="App">
      <h1>Newspaper Records</h1>
      <SearchForm updateForm={updateForm} searchInput={searchInput}/>
    </div>
  )
}

export default App