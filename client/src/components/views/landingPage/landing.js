import React, {useEffect, useState} from 'react'
import MapL from './map/mapL'
import Search from './search/search'
import RecFilter from './filter/recFilter'
import './landing.css'

function Landing() {

    const [Marker, setMarker] = useState([])
    const [Type, setType] = useState('')    //Search, Info, Arround, Filter

    const markPlaces = (places, type) => {
        if(places) {
            setMarker(places)
            //console.log(Marker)
        }
        if (type) {
            setType(type)
        }
    }

    return (
        <div>
            <div className='landing'>
                <MapL marker={Marker} type={Type}></MapL>
                <Search markPlaces={markPlaces}></Search>
                <RecFilter markPlaces={markPlaces}></RecFilter>  
            </div>
        </div>
    )
}

export default Landing
