import React from 'react';
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import {IUser} from "@/models/IUser";

const userPage = ({searchParams}:any) => {
    let user: IUser = JSON.parse(searchParams.data)
    console.log(user);
    return (
        <div>
            <ul>
                <li>{user.id}</li>
                <li>{user.name}</li>
                <li>{user.username}</li>
                <li>{user.email}</li>
            </ul>
        </div>
    );
};

export default userPage;