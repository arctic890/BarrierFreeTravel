import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import MapL from './mapL'
import Search from './search'
import './landing.css'

function Landing() {

    const [Marker, setMarker] = useState([])
    const [Type, setType] = useState('')

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
            </div>
        </div>
    )
}

export default Landing
