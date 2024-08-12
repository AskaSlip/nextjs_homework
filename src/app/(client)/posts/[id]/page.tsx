import React from 'react';
import {IPost} from "@/models/IPost";

const PostPage = ({searchParams}:any) => {

    let post: IPost = JSON.parse(searchParams.data)

    return (
        <div>
            <ul>
                <li>{post.id}</li>
                <li>{post.userId}</li>
                <li>{post.title}</li>
                <li>{post.body}</li>
            </ul>
        </div>
    );
};

export default PostPage;