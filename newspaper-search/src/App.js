import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { updateSearchForm, updateRenderedData } from './actionCreators/mainActions'
import SearchForm from './components/SearchForm'
import ArticleList from './components/ArticleList'

import './App.css'

function App() {
  const dispatch = useDispatch()
  const baseCurrency = useSelector(state => state.baseCurrency)
  const quoteCurrency = useSelector(state => state.quoteCurrency)
  const date = useSelector(state => state.date)
  const data = useSelector(state => state.data)

  const updateForm = event => {
    dispatch(updateSearchForm({id: event.target.name, value: event.target.value}))
  }

  const updateData = event => {
    event.preventDefault()
    dispatch(updateRenderedData(baseCurrency, date))
  }

  const updateDate = newDate => {
    dispatch(updateSearchForm({id: 'date', value: newDate}))
  }

  return (
    <div className="App">
      <h1>Currency Records</h1>
      <SearchForm updateForm={updateForm} updateData={updateData} baseCurrency={baseCurrency} quoteCurrency={quoteCurrency} date={date} updateDate={updateDate}/>
      <ArticleList data={data}/>
    </div>
  )
}

export default App