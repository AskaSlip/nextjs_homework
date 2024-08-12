import React from 'react';
import {IUser} from "@/models/IUser";

const userPage = ({searchParams}:any) => {
    let user: IUser = JSON.parse(searchParams.data)
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