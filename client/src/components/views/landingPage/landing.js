import React, {useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import MapL from './mapL'
import Search from './search'
import './landing.css'

function Landing() {
   

    return (
        <div>
            <div className='landing'>
                <MapL></MapL>
                <Search></Search>  
            </div>
        </div>
    )
}

export default Landing
