import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import Axios from 'axios'

function Comment(props) {
    const user = useSelector(state => state.user)  //reduxExtension으로 확인가능
    const [commentV, setcommentV] = useState("")

    const handleClick = (event) => {
        setcommentV(event.currentTarget.value)
    }

    const addComment = (variables) => {
        Axios.post('/api/comment/addComment', variables)
        .then(response => {
            if(response.data.success){
                setcommentV("")
                props.refresh(response.data.result) //send new comment to information.js
            }else{
                alert('fail to save comment')
            }
        })
    }

    const onSubmit = (event) => {
        if (user.userData && user.userData.isAuth){
            event.preventDefault()   //prevent refreshing when click submit
            const variables = {
                content: commentV,
                userFrom: user.userData._id,
                placeId: props.placeId,
                writer: user.userData.userId
            }
            addComment(variables)
        } else {
            alert("로그인이 필요한 기능 입니다")
        }
    }

    return (
        <form style={{display: 'flex'}} onSubmit={onSubmit}>
            <textarea 
                style={{width: '100%'}}
                onChange={handleClick}
                value={commentV}
                placeholder="댓글 추가..."
            />
            <br />
            <button className='button1' onClick={onSubmit}>등록</button>
        </form>
    )
}

export default Comment