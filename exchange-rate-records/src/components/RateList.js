import React from 'react'
import Rate from './Rate'

const RateList = ({ data }) => {
    return(
        <div className='RateList'>
            {data.map(slice => <Rate key={JSON.stringify(slice)} slice={slice}/>)}
        </div>
    )
}

export default RateList