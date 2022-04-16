import React, {useEffect, useState} from 'react';
import {postsService} from "../../services/posts.service";
import Post from "../Post/Post";

const Posts = ({userId}) => {
    const [posts, setPosts] = useState(null)
    useEffect(() => {
        postsService.getPostsById(userId).then(({data}) => setPosts(data))
    }, [userId])

    return (
        <div>
            {posts && posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;