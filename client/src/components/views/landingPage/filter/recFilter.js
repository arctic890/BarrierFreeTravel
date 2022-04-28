import Axios from 'axios'
import React from 'react'
import {BsEyeSlash} from 'react-icons/bs'
import {FaBrain} from 'react-icons/fa'
import {GiBabyBottle} from 'react-icons/gi'
import {MdOutlineAccessibleForward,MdOutlineAccessible,MdHearingDisabled,MdFitnessCenter, MdOutlineElderly} from 'react-icons/md'
import './filter.css'

function RecFilter(props) {

    const clickRec = (event, rec) => {
        event.preventDefault()
        Axios.post('/api/recommend/filter', {rec: rec})
            .then(response => {
                if(response.data.success){
                    console.log(response.data.result)
                    findPlace(response.data.result)
                } else {
                    alert("fail to get recommendFilter")
                }
            })
    }

    const findPlace = (filterR) => {
        let places = filterR.map(({ placeId }) => placeId)
        props.markPlaces(places, 'Filter')
        console.log(places)
    }

    return (
        <div className='recFilter'>
            <div className='recBox2' title='전동휠체어 이용인 추천' onClick={(event)=>clickRec(event, 'wheelchairA')}>
                <MdOutlineAccessibleForward className='icon' size= '24'/>
            </div>
            <div className='recBox2' title='수동휠체어 이용인 추천' onClick={(event)=>clickRec(event,'wheelchairM')}>
                <MdOutlineAccessible  className='icon'  size= '24'/>
            </div>
            <div className='recBox2' title='시각장애인 추천' onClick={(event)=>clickRec(event,'visual')}>
                <BsEyeSlash  className='icon'  size= '24'/>
            </div>
            <div className='recBox2' title='청각장애인 추천' onClick={(event)=>clickRec(event,'auditory')}>
               <MdHearingDisabled  className='icon'  size= '24'/>
            </div>
            <div className='recBox2' title='지적장애인 추천' onClick={(event)=>clickRec(event,'intellectual')}>
               <FaBrain  className='icon' size= '24'/>
            </div>  
            <div className='recBox2' title='보행가능한 지체장애인 추천' onClick={(event)=>clickRec(event,'physicalW')}>
                <MdFitnessCenter className='icon' size= '24'/>
            </div>
            <div className='recBox2' title='고령자 추천' onClick={(event)=>clickRec(event,'senior')}>
                <MdOutlineElderly className='icon' size= '24'/>
            </div>
            <div className='recBox2' title='영유아 추천' onClick={(event)=>clickRec(event,'infant')}>
                <GiBabyBottle className='icon' size= '24'/>
            </div> 
        </div>
    )
}

export default RecFilter