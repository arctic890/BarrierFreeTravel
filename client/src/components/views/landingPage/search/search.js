import Axios from 'axios'
import React, {useState} from 'react'
import './search.css'
import {BsSearch} from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'
import Information from './information'
 
function Search(props) {

    const [Keyword, setKeyword] = useState("")
    const [Search, setSearch] = useState([])
    const [Results, setResults] = useState(false)
    const [Background, setBackground] = useState(false)
    const [Info, setInfo] = useState(false)
    const [Place, setPlace] = useState([])

    const onSearchHandler = (event) => {
        setKeyword(event.currentTarget.value)
    }
    const searchEnter = () => {
        if (window.event.keyCode==13){
            let keyword = Keyword
            searchPlace(keyword)
        }
    }
    const searchPlace = (keyword) => {
        let variable = {keyword: keyword}
        Axios.post('/api/place/searchPlace', variable)
            .then(response => {
                if (response.data.success){
                    console.log(response.data.result)
                    setSearch(response.data.result)
                    setResults(true)
                    setInfo(false)
                    setBackground(true)
                    props.markPlaces(response.data.result, 'Search')
                }else{
                    alert("fail to get search result")
                }
            })
    }

    const clickResult = (result, event) => {
        event.preventDefault()
        setResults(false)
        setInfo(true)
        setPlace(result)
        props.markPlaces([result], 'Info')
    }

    const listResult = Search.map((result, index) => {
        return (
        <div className='searchR' key={index} onClick={(event)=>clickResult(result,event)}>
            <ul>
                <li className='name'>{result.name}</li>
                <li>{result.address}</li>
                <li>{result.holiday}</li>
                <li className='end'>{result.fee}</li>
            </ul>
        </div>
    )})

    return (
        <div className='searchBox'>
            {Background &&
                <div className='searchBackground'></div>
            }
            <div className='search'>
                <IconContext.Provider value={{color: '#3d8af7', size: '0.8rem'}}>
                    <BsSearch/>
                </IconContext.Provider>
                <input type="search" value={Keyword} placeholder= "Search" onChange={onSearchHandler} onKeyUp={searchEnter}/>
            </div>
            {Results && 
                <div className='infoBox'>
                    {listResult}
                </div>
            }
            {Info &&
                <div className='tempo'>
                <Information place={Place} markPlaces={props.markPlaces}/>
                </div>
            }
        </div>
    )
}

export default Search