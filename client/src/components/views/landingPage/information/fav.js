import React, {useState, useEffect} from 'react'
import {MdFavoriteBorder, MdFavorite} from 'react-icons/md'
import Axios from 'axios'
import { useSelector } from "react-redux";

function Fav(props) {

  const userFrom = props.userFrom
  const placeName = props.placeName
  //const recommend = props.recommend
  const placeAddress = props.placeAddress

  const [Favorite, setFavorite] = useState(false)
  const user = useSelector(state => state.user)

  let variable = {
    userFrom,
    placeName,
    //recommend,
    placeAddress
  }

  useEffect(() => {
    Axios.post('/api/favorite/favorited', variable)
            .then(response => {
                console.log(response.data)
                if (response.data.success) {
                    setFavorite(response.data.favorited)
                } else {
                    alert("fail to bring information")
                }
            })

  }, [])

  const clickFav = () => {
    if (user.userData && user.userData.isAuth){
      if (Favorite){
          Axios.post('/api/favorite/removeFav', variable)
          .then(response => {
              if(response.data.success){
                  setFavorite(!Favorite)
              } else {
                  alert("fail to remove favorite")
              }
          })
      } else {
          Axios.post('/api/favorite/addFav', variable)
          .then(response => {
              if(response.data.success){
                  setFavorite(!Favorite)
              } else {
                  alert("fail to add favorite")
              }
          })
      }

    }else{
      alert("로그인이 필요한 기능입니다")
  }
  }
  
  return (
    <button className='button1' id='heart' onClick={clickFav}>
      {Favorite? <MdFavorite size='15' color='hotpink'/>:<MdFavoriteBorder size='15' color='hotpink'/>}
    </button>
  )
}

export default Fav