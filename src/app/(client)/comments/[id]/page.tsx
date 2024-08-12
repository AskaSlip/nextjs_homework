import React from 'react';
import {IComment} from "@/models/IComment";

const CommentPage = ({searchParams}:any) => {

    let comment:IComment = JSON.parse(searchParams.data)
    return (
        <div>
            <ul>
                <li>{comment.id}</li>
                <li>{comment.email}</li>
                <li>{comment.name}</li>
                <li>{comment.body}</li>
            </ul>
        </div>
    );
};

export default CommentPage;