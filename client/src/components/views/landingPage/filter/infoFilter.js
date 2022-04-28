import React from 'react'
import Axios from 'axios'
import { useSelector } from "react-redux";
import {MdFavorite, MdDirectionsCar, MdRecordVoiceOver} from 'react-icons/md'
import {FaToilet, FaCrutch} from 'react-icons/fa'
import './filter.css'


function InfoFilter(props) {

    const user = useSelector(state => state.user)

    const clickFav = () => {
        if (user.userData && user.userData.isAuth){
            Axios.post('/api/favorite/getFavorite', {userFrom: user.userData._id})
                .then(response => {
                if(response.data.success){
                    console.log(response.data.favorites)
                    findPlace(response.data.favorites)
                } else {
                    alert("fail to get favFilter")
                }
            })
        } else {
            alert('로그인이 필요한 기능입니다')
        }
    }

    const findPlace = (filterI) => {
        let places = filterI.map(({ placeId }) => placeId)
        props.markPlaces(places, 'Favorite')
        console.log(places)
    }

    const clickCond = (event, condition) => {
        event.preventDefault()
        Axios.post('/api/place/filterCondition', {condition: condition})
            .then(response => {
                if(response.data.success){
                    console.log(response.data.result)
                    props.markPlaces(response.data.result, 'Filter')
                } else {
                    alert("fail to get infoFilter")
                }
            })
    }

  return (
    <div className='infoFilter'>
        <div className='filterBox' title='즐겨찾기' onClick={clickFav}>
            <MdFavorite className='icon' size='24' color='hotpink'/>
        </div>
        <div className='filterBox' title='장애인 주차장' onClick={(event)=>clickCond(event, 'parking')}>
            <MdDirectionsCar className='icon' size='24'/>
        </div>
        <div className='filterBox' title='장애인 화장실' onClick={(event)=>clickCond(event, 'toilet')}>
            <FaToilet className='icon' size='22'/>
        </div>
        <div className='filterBox' title='해설사' onClick={(event)=>clickCond(event, 'curator')}>
            <MdRecordVoiceOver className='icon' size='24'/>
        </div>
        <div className='filterBox' title='보조기구 대여' onClick={(event)=>clickCond(event, 'equipment')}>
            <FaCrutch className='icon' size='24'/>
        </div>
    </div>
  )
}

export default InfoFilter