import Axios from 'axios'
import React, {useState} from 'react'

function Search() {

    const [Keyword, setKeyword] = useState("")
    const [Search, setSearch] = useState([])
    const [Results, setResults] = useState(false)

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
                    console.log(keyword)
                    console.log(response.data.result)
                    setSearch(response.data.result)
                    setResults(true)
                }else{
                    alert("fail to get search result")
                }
            })
    }
    const listResult = Search.map((result, index) => {
        return <ul key={index}>
            <li>{result.name}</li>
            <li>{result.address}</li>
            <li>{result.holiday}</li>
            <li>{result.fee}</li>
        </ul>
    })

    return (
        <div>
            <input type="search" value={Keyword} placeholder="Search" onChange={onSearchHandler} onKeyUp={searchEnter}/>
            {Results && 
                <div >
                    {listResult}
                </div>
            }
        </div>
    )
}

export default Search