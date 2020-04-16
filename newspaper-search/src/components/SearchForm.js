import React from 'react'
import { currencyCodes } from '../currency_codes_array'
import DatePicker from 'react-datepicker' // datepicker component yielded from library
import 'react-datepicker/dist/react-datepicker.css' // datepicker styling from api


const SearchForm = props => {
    console.log(new Date())
    return (
        <>
        <form>
            <label htmlFor="baseCurrency">Base Currency:
                <select id='baseCurrency' name='baseCurrency' onChange={props.updateForm}>
                    {currencyCodes.map(currency => <option key={currency} value={currency}>{currency}</option>)}
                </select>
            </label>
            <label htmlFor='quoteCurrency'>Quote Currency
                <select id='quoteCurrency' name='quoteCurrency' onChange={props.updateForm}>
                    {currencyCodes.map(currency => <option key={currency} value={currency}>{currency}</option>)}
                </select>
            </label>
            <label>Choose a date: 
                <DatePicker  
                    id='date' 
                    selected={props.date} // data attribute of state selected
                    dateFormat={'yyyy-MM-dd'}
                    minDate={new Date('1999-01-01')} // api only has data going back to 1999
                    maxDate={new Date()} // obviously can't get data from the future
                    showYearDropdown
                    onChange={props.updateDate}
                />
            </label>
            <button onClick={props.updateData}>Submit Search</button>
        </form>
        
        </>
    )
}

export default SearchForm