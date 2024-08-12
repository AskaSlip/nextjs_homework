import React from 'react';
import {IPost} from "@/models/IPost";
import {getAllPosts} from "@/services/api.service";
import Link from "next/link";

const postsPage = async () => {

    let allPosts: IPost[] = await getAllPosts()

    return (
        <div>
            <ul>
                {
                    allPosts.map(post => <li key={post.id}>
                        <Link href={
                            {
                                pathname: '/posts/' + post.id,
                                query: {data: JSON.stringify(post)}
                            }
                        }>
                            {post.id} - {post.title}
                        </Link>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default postsPage;