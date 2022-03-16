import React, {useState} from 'react'
import {FaMapMarkerAlt} from 'react-icons/fa'
import Infowindow from './infowindow'
import './mapL.css'

//#75a9f9
function Marker(props) {
  const [InfoWindow, setInfoWindow] = useState(false)

  const clickMarker = () => {
    if (InfoWindow) {
      setInfoWindow(false)
    } else if (!InfoWindow) {
      setInfoWindow(true)
    }
  }

  return (
    <React.Fragment>
        <div onClick={clickMarker}>
            <FaMapMarkerAlt style={{color: '#3d8af7', width: '30px', height: '30px'}}/>
        </div>
        {InfoWindow && 
            <Infowindow marker={props.marker}/>
        }
    </React.Fragment>
    
  )
}

export default Marker