import Axios from 'axios'
import React,{useState, useEffect} from 'react'
import {BsEyeSlash} from 'react-icons/bs'
import {FaBrain} from 'react-icons/fa'
import {GiBabyBottle} from 'react-icons/gi'
import {MdOutlineAccessibleForward,MdOutlineAccessible,MdHearingDisabled,MdFitnessCenter, MdOutlineElderly} from 'react-icons/md'
import {IconContext} from 'react-icons/lib'
import './recommend.css'

function Recommend(props) {

    const [Recommend, setRecommend] = useState(null)
    const [Connect, setConnect] = useState(false)

    let placeId = props
    let colorA = 'white'

    useEffect(()=> {
      getRecommend(placeId)
    }, [Connect])

    const getRecommend = (placeId) => {
        Axios.post('/api/recommend/getRecommend', placeId)
            .then(response => {
              if(response.data.success){
                console.log(response.data.result)
                setRecommend(response.data.result[0])
                setConnect(true)
              } else {
                alert("fail to get recommendInfo")
              }
            })
    }

    const colorAlert = (type) => {
      let test = Recommend[type]
      //console.log(type, test) #ff3823 #72bb53
      if (test == 0) {
        return colorA = '#ff3823'
      } else if (test == 1) {
        return colorA = 'orange'
      } else if (test == 2) {
        return colorA = '#72bb53'
      }
    }

    return (
      <div>
        {Connect &&
          <div>
            <div className='recBox' title='전동휠체어 이용인 추천' style={{backgroundColor: colorAlert("wheelchairA")}}>
              <MdOutlineAccessibleForward className='icon' size= '18'/>
            </div>
            <div className='recBox' title='수동휠체어 이용인 추천' style={{backgroundColor: colorAlert('wheelchairM')}}>
              <MdOutlineAccessible  className='icon'  size= '18'/>
            </div>
            <div className='recBox' title='시각장애인 추천' style={{backgroundColor: colorAlert('visual')}}>
              <BsEyeSlash  className='icon'  size= '18'/>
            </div>
            <div className='recBox' title='청각장애인 추천' style={{backgroundColor: colorAlert('auditory')}}>
              <MdHearingDisabled  className='icon'  size= '18'/>
            </div>
            <div className='recBox' title='지적장애인 추천' style={{backgroundColor: colorAlert('intellectual')}}>
              <FaBrain  className='icon' size= '18'/>
            </div>  
            <div className='recBox' title='보행가능한 지체장애인 추천' style={{backgroundColor: colorAlert('physicalW')}}>
              <MdFitnessCenter className='icon' size= '18'/>
            </div>
            <div className='recBox' title='고령자 추천' style={{backgroundColor: colorAlert('senior')}}>
              <MdOutlineElderly className='icon' size= '18'/>
            </div>
            <div className='recBox' title='영유아 추천' style={{backgroundColor: colorAlert('infant')}}>
              <GiBabyBottle className='icon' size= '18'/>
            </div> 
          </div>
        }
      </div>
     
    )
}

export default Recommend