import React, {useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import MapL from './mapL'
import "../common/basic.css"

function Landing() {
   

    return (
        <div className='landing' style={{display: 'flex', justifyContent: 'center',alignItems: 'center', backgroundColor: '#ffe2d8'}}>
            <MapL></MapL>
        </div>
    )
}

export default Landing
