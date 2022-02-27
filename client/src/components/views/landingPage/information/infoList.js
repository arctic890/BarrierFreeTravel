import React from 'react'

function InfoList(props) {
    console.log(props)

    const equipLevel = (value) => {
        if (value == 0) {
          return "없음"
        } else if (value == 1) {
          return "있으나 시설 안좋음"
        } else if (value == 2) {
          return "있음"
        }
    }


    if (props.mode=="Info"){
        let place = props.place
        console.log(place)
        return (
            <div>
                <li>{place.address}</li>
                <li>장애인 주차장 {equipLevel(place.parking)} </li>
                <li>장애인 화장실 {equipLevel(place.toilet)}</li>
                <li>{place.holiday}</li>
                <li>{place.fee}</li>
                <li>보조기기 대여 {place.equipment}</li>
                <li>편의/부대시설 {place.facility}</li>
                <li className='ends'>해설사 {place.curator}</li>
                <li className='desc'>{place.description}</li>
            </div>
        )
    } else if (props.mode=="Arround"){
        let arrounds = props.arrounds
        const arroundList =arrounds.map((arround, index) => {
            return (
            <div key={index}>
                <ul>
                    <li className='name'>{arround.name}</li>
                    <li>{arround.distance}</li>
                    <li>{arround.category}</li>
                    <li>{arround.address}</li>
                    <li>{arround.phone}</li>
                    <li>{arround.wheel? "휠체어 진입가능":"휠체어 진입 불가"}</li>
                    <li className='end'>{arround.toilet?"장애인 화장실 있음":"장애인 화장실 없음"}</li>
                </ul>
            </div>
        )})
        return (
            <div>
                {arroundList}
            </div>
        )
    }
}

export default InfoList