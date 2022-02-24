import React from 'react'
import Recommend from './recommend'
import Comment from './comment'
import Course from './course'
import Near from './near'
import Fav from './fav'
import './information.css'


function Information(props) {
    let {place} = props
    console.log('place:',place)

    const equipLevel = (value) => {
      if (value == 0) {
        return "없음"
      } else if (value == 1) {
        return "있으나 시설 안좋음"
      } else if (value == 2) {
        return "있음"
      }
    }

    return (
      <ul className='info'>
        <li className='name'>{place.name}</li>
        <li className='buttons'><Comment/><Course/><Near/><Fav/></li>
        <li className='rec'><Recommend placeId={place._id}/></li>
        <li>{place.address}</li>
        <li>장애인 주차장 {equipLevel(place.parking)} </li>
        <li>장애인 화장실 {equipLevel(place.toilet)}</li>
        <li>{place.holiday}</li>
        <li>{place.fee}</li>
        <li>보조기기 대여 {place.equipment}</li>
        <li>편의/부대시설 {place.facility}</li>
        <li className='ends'>해설사 {place.curator}</li>
        <li className='desc'>{place.description}</li>
      </ul>
    )
}

export default Information