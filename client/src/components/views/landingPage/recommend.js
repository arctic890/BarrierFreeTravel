import Axios from 'axios'
import React,{useState, useEffect} from 'react'
import {BsEyeSlash} from 'react-icons/bs'
import {FaBrain} from 'react-icons/fa'
import {GiBabyBottle} from 'react-icons/gi'
import {MdOutlineAccessibleForward,MdOutlineAccessible,MdHearingDisabled,MdFitnessCenter, MdOutlineElderly} from 'react-icons/md'
import {IconContext} from 'react-icons/lib'
import './recommend.css'

function Recommend(props) {

    const [Recommend, setRecommend] = useState([])

    let placeId = props
    let colorA = 'white'

    useEffect(()=> {
      getRecommend(placeId)
    }, [])

    const getRecommend = (placeId) => {
        Axios.post('/api/recommend/getRecommend', placeId)
            .then(response => {
              if(response.data.success){
                console.log(response.data.result)
                setRecommend(response.data.result)
                console.log(Recommend)
              } else {
                alert("fail to get recommendInfo")
              }
            })
    }

    const colorAlert = (type) => {
      //console.log(type, Recommend.type)
      let test = Recommend.wheelchairA
      console.log(type, test)
      if (test =="0") {
        return colorA = 'red'
      } else if (test = "1") {
        return colorA = 'orange'
      } else if (test = "2") {
        return colorA = 'green'
      }
    }

    return (
      <div>
          <div className='recBox' title='전동휠체어 이용인 추천' style={{backgroundColor: colorAlert("wheelchairA")}}>
              <MdOutlineAccessibleForward/>
          </div>
          <div className='recBox' title='수동휠체어 이용인 추천' style={{backgroundColor: colorAlert('wheelchairM')}}>
              <MdOutlineAccessible/>
          </div>
          <div className='recBox' title='시각장애인 추천' style={{backgroundColor: colorAlert('visual')}}>
              <BsEyeSlash/>
          </div>
          <div className='recBox' title='청각장애인 추천' style={{backgroundColor: colorAlert('auditory')}}>
              <MdHearingDisabled/>
          </div>
          <div className='recBox' title='지적장애인 추천' style={{backgroundColor: colorAlert('intellectual')}}>
              <FaBrain/>
          </div>  
          <div className='recBox' title='보행가능한 지체장애인 추천' style={{backgroundColor: colorAlert('physicalW')}}>
              <MdFitnessCenter/>
          </div>
          <div className='recBox' title='고령자 추천' style={{backgroundColor: colorAlert('senior')}}>
              <MdOutlineElderly/>
          </div>
          <div className='recBox' title='영유아 추천' style={{backgroundColor: colorAlert('infant')}}>
              <GiBabyBottle/>
          </div> 
      </div>
    )
}

export default Recommend