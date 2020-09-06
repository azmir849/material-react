import React from 'react';
import { Avatar } from '@material-ui/core';

const PostComment = (props) => {
    const{name,body,email} = props.comment;
    const postStyle = {
        border: '5px solid purple',
        margin: '10px',
        padding: '5px',
        borderRadius :'5px'
    }
    return (
        <div style={postStyle}>
            <Avatar alt="" src="/static/images/avatar/1.jpg" />
            <h4><strong>Comment : </strong>{body}</h4>
            <p>Comment By : {name}</p>
            <p>Email : {email}</p>
        </div>
    );
};

export default PostComment;