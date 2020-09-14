import {CREATE_POSTS} from "../type";

const initialState ={
    posts:[]
}


export const postReducer = (state=initialState,action)=>{
    switch (action.type) {
        case CREATE_POSTS:
            return { ...state, posts: state.posts.concat([action.payload]) }
        default:return state

    }
}
