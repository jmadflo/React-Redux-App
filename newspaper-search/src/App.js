import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { updateSearchForm, updateRenderedData } from './actionCreators/mainActions'
import SearchForm from './components/SearchForm'
import ArticleList from './components/ArticleList'

import './App.css'

function App() {
  const dispatch = useDispatch()
  const searchText = useSelector(state => state.searchText)
  const searchSection = useSelector(state => state.searchSection)
  const data = useSelector(state => state.data)

  const updateForm = event => {
    dispatch(updateSearchForm({name: event.target.name, value: event.target.value}))
  }

  const updateData = event => {
    event.preventDefault()
    dispatch(updateRenderedData(searchText, searchSection))
  }

  return (
    <div className="App">
      <h1>Currency Records</h1>
      <SearchForm updateForm={updateForm} updateData={updateData} searchText={searchText}/>
      <ArticleList data={data}/>
    </div>
  )
}

export default App