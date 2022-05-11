import React from 'react'

const SummaryFeature = ({text,description}) => {
  return (
    <div className='summary-feature'>
        <p>{text}</p>
        <p>{description}</p>
    </div>
  )
}

export default SummaryFeature