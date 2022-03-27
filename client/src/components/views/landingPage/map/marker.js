import React, {useState, useEffect} from 'react'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {MdFavorite} from 'react-icons/md'
import Infowindow from './infowindow'
import './mapL.css'

//#75a9f9
function Marker(props) {
  
  const [InfoWindow, setInfoWindow] = useState(false)
  const [Fav, setFav] = useState(false)
  let type = props.type

  useEffect(() => {
    console.log(type)
    if (type=='Favorite'){
      setFav(true)
    }
    else{
      setFav(false)
    }
  
  }, [props.type])
  

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
            {Fav? 
                <MdFavorite size='30' color='hotpink'/>
                :<FaMapMarkerAlt style={{color: '#3d8af7', width: '30px', height: '30px'}}/>
            }
        </div>
        {InfoWindow && 
            <Infowindow marker={props.marker}/>
        }
    </React.Fragment>
    
  )
}

export default Marker