import React from 'react';
import Link from "next/link";
import {IUser} from "@/models/IUser";
import {getAllUsers} from "@/services/api.service";

const usersPage =  async () => {

   let allUsers:IUser[] = await getAllUsers()
    return (
        <div>
            <ul>
                {allUsers.map(user => <li key={user.id}>
                    <Link href={
                        {
                            pathname:'/users/'+user.id,
                            query:{data:JSON.stringify(user)}
                        }
                        }>{user.id}: {user.name}</Link>
                </li>)
                }
            </ul>
        </div>
    );
};

export default usersPage;