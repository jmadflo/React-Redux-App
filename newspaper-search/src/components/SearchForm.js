import React from 'react'
import { currencyCodes } from '../currency_codes_array'
import DatePicker from 'react-datepicker' // datepicker component yielded from library
import 'react-datepicker/dist/react-datepicker.css' // datepicker styling from api

const SearchForm = props => {
    return (
        <form>
            <label htmlFor="baseCurrency">Base Currency:
                <select id='baseCurrency' name='baseCurrency' onChange={props.updateForm}>
                    {currencyCodes.map(currency => <option key={currency.code} value={currency.code}>{currency.name}</option>)}
                </select>
            </label>
            <label htmlFor='quoteCurrency'>Quote Currency
                <select id='quoteCurrency' name='quoteCurrency' defaultValue={props.quoteCurrency} onChange={props.updateForm}>
                    {currencyCodes.map(currency => <option key={currency.code} value={currency.code}>{currency.name}</option>)}
                </select>
            </label>
            <label>Choose a date: 
                <DatePicker  
                    id='date' 
                    selected={new Date(props.date)} // data attribute of state selected
                    dateFormat={'yyyy/MM/dd'}
                    minDate={new Date('1999/01/01')} // api only has data going back to 1999
                    maxDate={new Date()} // obviously can't get data from the future
                    showYearDropdown
                    onChange={newDate => props.updateDate(newDate)}
                />
            </label>
            <button className='submitButton' onClick={props.updateData}>Submit Search</button>
        </form>
    )
}

export default SearchForm