import {IUser} from "@/models/IUser";
import {IComment} from "@/models/IComment";
import {IPost} from "@/models/IPost";

export const getAllUsers = async () : Promise<IUser[]>=> {
    let responce = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
    return responce
}

export const getAllPosts = async () : Promise<IPost[]>=> {
    let responce = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
    return responce
}

export const getAllComments = async () : Promise<IComment[]>=> {
    let responce = await fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())
    return responce
}