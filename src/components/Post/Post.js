import React from 'react';

const Post = ({post}) => {
    return (
        <div>
            {post.id} -- {post.title}
        </div>
    );
};

export default Post;