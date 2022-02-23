import React from 'react'
import Recommend from './recommend'
import './information.css'

function Information(props) {
    let {place} = props
    console.log('place:',place)

    return (
      <ul className='info'>
        <li>{place.name}</li>
        <li><Recommend placeId={place._id}/></li>
        <li>{place.address}</li>
        <li>{place.parking}</li>
        <li>{place.toilet}</li>
        <li>{place.holiday}</li>
        <li>{place.fee}</li>
        <li>{place.equipment}</li>
        <li>{place.facility}</li>
        <li>{place.curator}</li>
        <li className='desc'>{place.description}</li>
      </ul>
    )
}

export default Information