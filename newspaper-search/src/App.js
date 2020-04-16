import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { updateSearchForm, updateRenderedData } from './actionCreators/mainActions'
import SearchForm from './components/SearchForm'
import ArticleList from './components/ArticleList'

import './App.css'


// turn datetime into yyyy-MM-dd format
export const formatDate = (dateToFormat) => {
  // make sure date and month are two digit numbers
  // console.log(dateToFormat)
  const date = dateToFormat.getDate()>9 ? dateToFormat.getDate() : `0${dateToFormat.getDate()}`
  const month = dateToFormat.getMonth()>9 ? dateToFormat.getMonth()+1 : `0${dateToFormat.getMonth()+1}`
  const year = dateToFormat.getFullYear()
  return `${year}/${month}/${date}`
}

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
    const formattedDate = formatDate(newDate)
    dispatch(updateSearchForm({id: 'date', value: formattedDate}))
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