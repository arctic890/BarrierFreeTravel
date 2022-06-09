import Axios from 'axios'
import React,{useState, useEffect} from 'react'
import Recommend from '../landingPage/search/recommend'
import './favorite.css'

function Favorite() {

    const [Favorites, setFavorites] = useState([])

    useEffect(() => {
        fetchFav()
    }, [])

    //bring favorite list
    const fetchFav = () => {
        Axios.post('/api/favorite/getFavorite', {userFrom: localStorage.getItem('userId')})
            .then(response => {
                if (response.data.success){
                    console.log(response.data)
                    setFavorites(response.data.favorites)
                }else{
                    alert("fail to bring movie information")
                }
            })
    }

    //remove favorite
    const onClickRem = (placeId, userFrom) => {
        const variables = {
            placeId,
            userFrom
        }
        Axios.post('/api/favorite/remList', variables)
            .then(response => {
                if (response.data.success) {
                    fetchFav()
                }else{
                    alert("fail to remove the movie from list")
                }
            })
    }

    
    //list favorite  <Recommend placeId={place._id}/>
    const listCards = Favorites.map((favorite, index) => {

        return <tr key={index}>
            <td>{favorite.placeId.name}</td>
            <td><Recommend placeId={favorite.placeId}/></td>
            <td>{favorite.placeId.address}</td>
            <td><button className='favbut' onClick={()=>onClickRem(favorite.placeId, favorite.userFrom)}>삭제</button></td>
        </tr>
    })



    return (   
        <div style={{width: '85%', margin: '3rem auto'}}>
            <h2> 즐겨찾기</h2>
            
            <table className='favtable'>
                <thead className='favhead'>
                    <th>이름</th>
                    <th>추천</th>
                    <th>위치</th>
                    <th></th>
                </thead>
                <tbody className='tbody'>
                    {listCards}
                </tbody>
            </table>
           
            <button>지도에서 보기</button>
        </div>
    )
}

export default Favorite