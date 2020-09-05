import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const{title,body,id} = props.post;
    const postStyle = {
        border: '20px solid purple',
        margin: '100px',
        padding: '50px',
        borderRadius :'50px'
    }
    return (
        <div style={postStyle}>
            <h3>{title}</h3>
            <p><small>{body}</small></p>
            <Button variant="contained" color="secondary"><Link to ={`/post/${id}`} >Details</Link></Button>
        </div>
    );
};

export default Post;