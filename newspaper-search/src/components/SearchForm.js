import React from 'react'
import { currencyCodes } from '../currency_codes_array'
import DatePicker from 'react-datepicker'

const SearchForm = props => {
    return (
        <form>
            <label htmlFor="baseCurrency">Base Currency:
                <select id='baseCurrency' name='baseCurrency' onChange={props.updateForm}>
                    {currencyCodes.map(currency => <option key={currency} value={currency}>{currency}</option>)}
                </select>
             </label>
            <label htmlFor="quoteCurrency">Quote Currency:
                <select name='quoteCurrency' onChange={props.updateForm}>
                    {currencyCodes.map(currency => <option key={currency} value={currency}>{currency}</option>)}
                </select>
             </label>
            <button onClick={props.updateData}>Submit Search</button>
        </form>
    )
}

export default SearchForm