/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu } from 'antd';
import axios from 'axios';
//import { USER_SERVER } from '../../../../config';
//import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';

function RightMenu(props) {
  const user = useSelector(state => state.user)
  let navigate = useNavigate();

  const logoutHandler = () => {
    axios.get('api/users/logout')
        .then(response => {
            if (response.data.success){
                navigate('/login')
            } else {
                alert('Fail to logout')
            }
            console.log(response.data)
        })
    }

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="signin">
          <a href="/login">Signin</a>
        </Menu.Item>
        <Menu.Item key="resgister">
          <a href="/register">Register</a>
        </Menu.Item>
      </Menu>
    )
  } else {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="fav">
          <a href="/favorite">Favorite</a>
        </Menu.Item>
        <Menu.Item key="comment">
          <a href="/comment">Comment</a>
        </Menu.Item>
        <Menu.Item key="logout">
          <a onClick={logoutHandler}>Logout</a>
        </Menu.Item>
      </Menu>
    )
  }
}

export default RightMenu;