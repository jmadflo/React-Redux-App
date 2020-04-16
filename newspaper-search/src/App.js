import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateSearchFormAction, updateDateAction } from './actionCreators/mainActions'
import SearchForm from './components/SearchForm'
import ArticleList from './components/ArticleList'

import './App.css'


// turn datetime into yyyy/MM/dd format
export const formatDate = (dateToFormat) => {
  // console.log(dateToFormat)
  // make sure date and month are two digit numbers
  const date = dateToFormat.getDate()>9 ? dateToFormat.getDate() : `0${dateToFormat.getDate()}`
  const month = (dateToFormat.getMonth()+1)>9 ? dateToFormat.getMonth()+1 : `0${dateToFormat.getMonth()+1}`
  const year = dateToFormat.getFullYear()
  return `${year}/${month}/${date}`
}

function App() {
  // Redux hooks
  const dispatch = useDispatch()
  const baseCurrency = useSelector(state => state.baseCurrency)
  const quoteCurrency = useSelector(state => state.quoteCurrency)
  const date = useSelector(state => state.date)
  const data = useSelector(state => state.data)

  // Form methods
  const updateForm = event => {
    dispatch(updateSearchFormAction({id: event.target.name, value: event.target.value}))
  }

  // const submitSearch = event => {
  //   event.preventDefault()
  //   dispatch(submitSearch(baseCurrency, date))
  // }

  const updateDate = newDate => {
    const formattedDate = formatDate(newDate)
    dispatch(updateDateAction(formattedDate))
  }

  return (
    <div className="App">
      <h1>Currency Records</h1>
      <SearchForm updateForm={updateForm} updateDate={updateDate} baseCurrency={baseCurrency} quoteCurrency={quoteCurrency} date={date}/>
      <ArticleList data={data}/>
    </div>
  )
}

export default App