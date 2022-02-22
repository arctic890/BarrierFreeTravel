import React from 'react'

function Footer() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'0.5rem', backgroundColor:'#ffe2d8', color: '#a8c6fa', padding: '9px'
        }}>
           <p> @copyright 2022 </p>
        </div>
    )
}

export default Footer