import React from 'react';
import {getAllComments} from "@/services/api.service";
import Link from "next/link";

const CommentsPage = async () => {

    let allComments = await getAllComments()

    return (
        <div>
            <ul>
                {
                    allComments.map(comment => <li key={comment.id}>
                        <Link href={{
                            pathname: '/comments/'+comment.id,
                            query: {data:JSON.stringify(comment)}
                        }}>
                            {comment.id} - {comment.name}
                        </Link>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default CommentsPage;