import Axios from 'axios'
import React, {useState} from 'react'

function AddPlace() {

    const [Name, setName] = useState("")
    const [Address, setAddress] = useState("")
    const [Holiday, setHoliday] = useState("")
    const [Fee, setFee] = useState("")

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

    const onAdd = (event) => {
        event.preventDefault()
        let body = {
            name: Name,
            address: Address,
            holiday: Holiday,
            fee: Fee
        }
        Axios.post('/api/place/addPlace', body)
            .then(response => {
                if (response.data.success){

                }else{
                    alert("Fail!!!!!!!!!!!")
                }
            })
    }

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
        <button>Add</button>
    </form>
    </div>
  )
}

export default AddPlace