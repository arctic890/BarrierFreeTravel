/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';

function RightMenu(props) {
  const user = useSelector(state => state.user)
  let navigate = useNavigate();

  const logoutHandler = () => {
    axios.get('api/users/logout')
        .then(response => {
            if (response.data.success){
                window.localStorage.clear()
                navigate('/login')
            } else {
                alert('Fail to logout')
            }
            console.log(response.data)
        })
    }
  
  if (user.userData && !user.userData.isAuth) {
    return ( 
      <ul>
        <li><a href="/login">로그인</a></li>
        <li><a href="/register">회원가입</a></li>
      </ul>
    )
  } else {
    return (
      <ul>
        <li><a href="/favorite">즐겨찾기</a></li>
        <li><a href="/comment">후기</a></li>
        <li><a onClick={logoutHandler}>로그아웃</a></li>
      </ul>
    )
  }
}

export default RightMenu;