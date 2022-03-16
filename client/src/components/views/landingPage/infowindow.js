import React from 'react'
import './mapL.css'

function Infowindow(props) {
  return (
    <div className='infowindow'>
        <p className='infoWName'>{props.marker.name}</p>
        <p>{props.marker.address}</p>
    </div>
  )
}

export default Infowindow