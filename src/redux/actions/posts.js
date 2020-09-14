import {CREATE_POSTS} from "../type";


export function createPosts(post){
    return{
        type:CREATE_POSTS,
        payload:post
    }
}