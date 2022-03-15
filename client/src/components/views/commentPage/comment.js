import React, { useEffect,useState } from 'react'
import {useSelector} from 'react-redux'
import Axios from 'axios'
import './comment.css'

function Comment() {

    const [Comments, setComments] = useState([])
    //console.log(Comments)

    useEffect(() => {
        fetchComment()      
    }, [])

    const fetchComment = () => {
        Axios.post('/api/comment/getCommentById', {userFrom: localStorage.getItem('userId')})
            .then (response => {
                if (response.data.success){
                    //console.log(response.data)
                    setComments(response.data.results)
                }else{
                    alert("fail to bring comments")
                }
            })
    }
    
    const commentRem = (commentId) => {
        Axios.post('/api/comment/commentRem', {commentId:commentId})
            .then(response => {
                if (response.data.success){
                    fetchComment()
                }else{
                    alert("fail to bring comments")
                }
            })
    }

    const myComments = Comments.map((comment, index)=> {
        return (
            <div key={index}>
                <ul className='commentBox'>
                    <li className='name'>{comment.placeId.name}</li>
                    <li className='button2'><button onClick={()=>commentRem(comment._id)}>삭제</button></li>
                    
                    <br/>
                    <li className='content'>{comment.content}</li>
                </ul>
            </div>
        )
    })

    return (
        <div className='commentPage' >
            <div style={{width: '85%', margin: '0 auto'}}>
                <h2> 후기</h2>
                <div>
                    {myComments}
                </div>
            </div>
        </div>
    )
}

export default Comment