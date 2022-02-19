import Axios from 'axios'
import React,{useState, useEffect} from 'react'

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
    const onClickRem = (placeName, userFrom) => {
        const variables = {
            placeName,
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

    
    //list favorite
    const listCards = Favorites.map((favorite, index) => {

        return <tr key={index}>
            <td>{favorite.placeName}</td>
            <td>{/*favorite.recommend*/}</td>
            <td>{favorite.placeAddress}</td>
            <td><button onClick={()=>onClickRem(favorite.placeName, favorite.userFrom)}>삭제</button></td>
        </tr>
    })



    return (   
        <div style={{width: '85%', margin: '3rem auto'}}>
            <h2> 즐겨찾기</h2>
            <hr/>
            
            <table>
                <thead>
                    <th>이름</th>
                    <th>추천</th>
                    <th>위치</th>
                    <th></th>
                </thead>
                <tbody>
                    {listCards}
                </tbody>
            </table>
            <hr/>
            <button>지도에서 보기</button>
        </div>
    )
}

export default Favorite