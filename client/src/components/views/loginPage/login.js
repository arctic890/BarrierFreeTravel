import { Axios } from 'axios'
import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {loginUser} from '../../../_actions/user_action'
import {useNavigate} from 'react-router-dom';
import './login.css'

function Login(props) {
    let navigate = useNavigate();

    const dispatch = useDispatch();

    //onchage event -> state value -> value change 
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        //submitted email and password are saved in states
        let body = {
            email: Email,
            password: Password
        }
        
        //let navigate = useNavigate();

        //action(loginUser)
        dispatch(loginUser(body))
            .then(response=>{
                if(response.payload.loginSuccess){
                    window.localStorage.setItem('userId',response.payload.userId);
                    navigate('/')
                } else {
                    alert('Error')
                }
            })
    }


    return (
        <div className='loginP' style = {{display:'flex', justifyContent: 'center', alignItems: 'center'
        , width: '100%', height: '70vh'
        }}>
            <form style={{display: 'flex', flexDirection: 'column'}}
                onSubmit={onSubmitHandler}>
                <lable className='loginL'>Email</lable>
                <input type="email" value={Email} onChange={onEmailHandler} /> 
                <lable className='loginL'>Password</lable>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <br />
                <button>로그인</button>
            </form>
        </div>
    )
}

export default Login
