import Axios from 'axios'
import React, {useState} from 'react'

function AddPlace() {

    const [Name, setName] = useState("")
    const [Address, setAddress] = useState("")
    const [Holiday, setHoliday] = useState("")
    const [Fee, setFee] = useState("")
    const [Lng, setLng] = useState("")
    const [Lat, setLat] = useState("")

    const onName = (event) => {
        setName(event.currentTarget.value)
    }
    const onAddress = (event) => {
        setAddress(event.currentTarget.value)
    }
    const onHoliday = (event) => {
        setHoliday(event.currentTarget.value)
    }
    const onFee = (event) => {
        setFee(event.currentTarget.value)
    }
    const onLat = (event) => {
        setLat(event.currentTarget.value)
    }
    const onLng = (event) => {
        setLng(event.currentTarget.value)
    }

    const onAdd = (event) => {
        event.preventDefault()
        let body = {
            name: Name,
            address: Address,
            holiday: Holiday,
            fee: Fee,
            geometry: {
                type: 'Point',
                coordinates: [Lng, Lat]
            }
        }
        Axios.post('/api/place/addPlace', body)
            .then(response => {
                if (response.data.success){

                }else{
                    alert("Fail!!!!!!!!!!!")
                }
            })
    }

    /** <label>curator</label>
        <input type="text" value={Curator} onChange={onFee}/>
        <label>facility</label>
        <input type="text" value={Facility} onChange={onFee}/>
        <label>equipment</label>
        <input type="text" value={Equipment} onChange={onFee}/>
        <label>description</label>
        <input type="text" value={Description} onChange={onFee}/>
        <label>geometry</label>
        <input type="text" value={Geometry} onChange={onFee}/> */

  return (
    <div>
    <form onSubmit={onAdd}>
        <label>Name</label>
        <input type="text" value={Name} onChange={onName}/>
        <label>Address</label>
        <input type="text" value={Address} onChange={onAddress}/>
        <label>holiday</label>
        <input type="text" value={Holiday} onChange={onHoliday}/>
        <label>fee</label>
        <input type="text" value={Fee} onChange={onFee}/>
        <label>longitude</label>
        <input type="text" value={Lng} onChange={onLng}/>
        <label>latitude</label>
        <input type="text" value={Lat} onChange={onLat}/>
        
       
        <button>Add</button>
    </form>
    </div>
  )
}

export default AddPlace