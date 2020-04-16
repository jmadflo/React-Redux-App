import React from 'react'

const Rate = props => {
    const {base, quote, date, rate} = props.slice
    return (
        <div className='Rate'>
            <p><span>{rate}</span>{quote}/{base}</p>
            <p>{date}</p>
        </div>
    )
}

export default Rate