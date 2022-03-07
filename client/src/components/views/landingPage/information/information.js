import React, {useState} from 'react'
import './information.css'
import Axios from 'axios'
import Recommend from './recommend'
import Fav from './fav'
import InfoList from './infoList'



function Information(props) {
    let {place} = props
    //console.log('place:',place)
    //let {arroundColor} = 'white'

    const [Mode, setMode] = useState("Info")
    const [Arrounds, setArrounds] = useState([])
    const [Comments, setComments] = useState([])
    const [Course, setCourse] = useState([])

    const clickComment = () => {
      getComment(place._id)
      setMode("Comment")
    }

    const refresh = (newComment) => {
      setComments(Comments.concat(newComment))
    }

    const clickArround = () => {
      getArround(place._id)
      //arroundColor = '#a8c6fa'
      setMode("Arround")
    }

    const clickCourse = () => {
      getCourse(place._id)
      setMode("Course")
    }

    const getArround = (placeId) => {
      //console.log(placeId)
      Axios.post('/api/arround/getArround', {placeId:placeId})
        .then(response => {
          if (response.data.success){
            console.log(response.data)
            setArrounds(response.data.results)
            props.markPlaces(response.data.results, 'Arround')
          } else {
            alert("fail to get arroundInfo")
          }
        })
    }

    const getComment = (placeId) => {
      Axios.post('/api/comment/getComment', {placeId:placeId})
        .then(response => {
          if (response.data.success){
            console.log(response.data)
            setComments(response.data.results)
          } else {
            alert("fail to get commentInfo")
          }
        })
    }

    const getCourse = (placeId) => {
      Axios.post('/api/Course/getCourse', {placeId:placeId})
        .then(response => {
          if (response.data.success){
            console.log(response.data)
            setCourse(response.data.results)
          } else {
            alert("fail to get commentInfo")
          }
        })
    }

    return (
      <ul className='info'>
        <li className='name'>{place.name}</li>
        <li className='buttons'>
          <button className='button1' onClick={clickComment}>후기</button>
          <button className='button1' onClick={clickCourse}>코스</button>
          <button className='button1' onClick={clickArround}>주변 관광지</button>
          <Fav userFrom={localStorage.getItem('userId')} placeId={place._id} placeName={place.name} placeAddress={place.address}/>
        </li>
        <li className='rec'><Recommend placeId={place._id}/></li>
        <InfoList mode={Mode} place={place} arrounds={Arrounds} comments={Comments} course={Course} refresh={refresh}/>
      </ul>
    )
}

export default Information