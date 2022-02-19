import React, {useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import MapL from './mapL'

function Landing() {
   

    return (
        <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
            <MapL></MapL>
        </div>
    )
}

export default Landing
