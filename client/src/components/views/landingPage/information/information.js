import React, {useState} from 'react'
import './information.css'
import Axios from 'axios'
import Recommend from './recommend'
import Comment from './comment'
import Course from './course'
import Fav from './fav'
import InfoList from './infoList'



function Information(props) {
    let {place} = props
    //console.log('place:',place)
    //let {arroundColor} = 'white'

    const [Mode, setMode] = useState("Info")
    const [Arrounds, setArrounds] = useState([])

    const clickArround = () => {
      getArround(place._id)
      //arroundColor = '#a8c6fa'
      setMode("Arround")
    }

    const getArround = (placeId) => {
      console.log(placeId)
      Axios.post('/api/arround/getArround', {placeId:placeId})
        .then(response => {
          if (response.data.success){
            console.log(response.data)
            setArrounds(response.data.results)
          } else {
            alert("fail to get arroundInfo")
          }
        })
    }

    return (
      <ul className='info'>
        <li className='name'>{place.name}</li>
        <li className='buttons'>
          <Comment/>
          <Course/>
          <button className='button1' onClick={clickArround}>주변 관광지</button>
          <Fav userFrom={localStorage.getItem('userId')} placeName={place.name} placeAddress={place.address}/>
        </li>
        <li className='rec'><Recommend placeId={place._id}/></li>
        <InfoList mode={Mode} place={place} arrounds={Arrounds}/>
      </ul>
    )
}

export default Information