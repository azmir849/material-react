import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostComment from '../PostComment/PostComment';



const PostDetail = () => {
    const {id} = useParams();
    const[post,setpost] = useState([]);
    const[comments,setComments] = useState([]);
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setpost(data));

    } , [id]);
    useEffect(() =>{
        const url2 = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url2)
        .then(res => res.json())
        .then(data => setComments(data));

    } , [id])
    const postStyle = {
        border: '20px solid purple',
        margin: '100px',
        padding: '50px',
        borderRadius :'50px'
    }

    return (
        <div>
            <div style={postStyle}>
                <h4>Post ID : {post.id}</h4>
                <h5>Post Title : {post.title}</h5>
                <h5>Post Body : {post.body}</h5>
            </div>
            <div>
                <h1>{comments.length}Comments</h1>
                {
                    comments.map(comment => <PostComment comment={comment} key={comment.id}></PostComment>)
                }
            </div>
        </div>
    );
};

export default PostDetail;