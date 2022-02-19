import React, {useEffect} from "react";
import { Axios } from "axios";
import {useDispatch} from  "react-redux";
import {auth} from '../_actions/user_action';
//import { response } from "express";
import { useNavigate } from "react-router-dom";

export default function (SpecificComponent, option, adminRoute=null){

    //null -> anyone
    //true -> only login user
    //false -> except login user
    //adminRoute default null / true -> only admin
    
    function AuthenticationCheck(props) {

        let navigate = useNavigate();
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(auth()).then(response => {
                console.log(response)

                //signin X
                if (!response.payload.isAuth){
                    if (option){
                        navigate('/login')
                        alert("권한이 없는 페이지 입니다")
                    }
                //signin O
                }else {
                    //admin only & admin X
                    if(adminRoute && !response.payload.isAdmin){
                        navigate('/')
                        alert("권한이 없는 페이지 입니다") 
                    }else{
                        //except login user
                        if (option === false){
                            navigate('/')
                            alert("권한이 없는 페이지 입니다")
                        }
                    }
                }
            })     
        }, [])

        return (
            <SpecificComponent/>
        )
    }

    return <AuthenticationCheck/>
}