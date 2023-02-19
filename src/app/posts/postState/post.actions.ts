import { props } from "@ngrx/store";
import { createAction } from "@ngrx/store";
import { post } from "../postModels/post.model";




export const ADD_POST_ACTION = '[posts page] add post';
export const ADD_POST_SUCCESS = '[posts page] add post success';
export const UPDATE_POST_ACTION = '[posts page] update post';
export const UPDATE_POST_SUCCESS = '[posts page] update post success';
export const DELETE_POST_ACTION = '[posts page] delete post';
export const DELETE_POST_SUCCESS = '[posts page] delete post success';
export const LOAD_POSTS = '[posts page] load posts';
export const LOAD_POSTS_SUCCESS = '[posts page] load posts success';



export const loadPosts = createAction(LOAD_POSTS);
export const addPost=createAction(ADD_POST_ACTION,
    props<{post:post}>());