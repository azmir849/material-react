import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const PostDetail = () => {

    const {id} = useParams();
    const[post,setpost] = useState({});
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setpost(data));

    } , [])
    const postStyle = {
        border: '20px solid purple',
        margin: '100px',
        padding: '50px',
        borderRadius :'50px'
    }

    return (
        <div style={postStyle}>
            <h4>Post ID : {post.id}</h4>
            <h5>Post Title : {post.title}</h5>
            <h6>Post Body : {post.body}</h6>
            <h1>Post Comments : </h1>
        </div>
    );
};

export default PostDetail;