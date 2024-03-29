import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {registerUser} from '../../../_actions/user_action'
import {useNavigate} from 'react-router-dom';
import './register.css'

function Register() {
    let navigate = useNavigate();

    const dispatch = useDispatch();

    //onchage event -> state value -> value change 
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Name, setName] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    
    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        //submitted email and password are saved in states
        if (Password !== ConfirmPassword) {
            return alert('Password and Confirm Password do not match')
        }

        let body = {
            userId: Name,
            email: Email,
            password: Password
        }

        //action(loginUser)
        dispatch(registerUser(body))
            .then(response=>{
                if(response.payload.success) {
                    navigate('/login')
                } else {
                    alert("Fail to register")
                }
            })
    }

    return (
        <div className='registerP' style = {{display:'flex', justifyContent: 'center', alignItems: 'center'
        , width: '100%', height: '70vh'
        }}>
            <form style={{display: 'flex', flexDirection: 'column'}}
                onSubmit={onSubmitHandler}>
                <lable className='registerL'>Email</lable>
                <input type="email" value={Email} onChange={onEmailHandler} /> 
                <lable className='registerL'>Name</lable>
                <input type="text" value={Name} onChange={onNameHandler} />
                <lable className='registerL'>Password</lable>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <lable className='registerL'>Confirm Password</lable>
                <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
                <br />
                <button>회원가입</button>
            </form>
        </div>
    )
}

export default Register
