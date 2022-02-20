import React, {useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import MapL from './mapL'
import Search from './search'

function Landing() {
   

    return (
        <div>
            <div className='landing' style={{display: 'flex', justifyContent: 'center',alignItems: 'center', backgroundColor: '#ffe2d8'}}>
                <MapL></MapL>
                <Search></Search>  
            </div>
        </div>
    )
}

export default Landing
