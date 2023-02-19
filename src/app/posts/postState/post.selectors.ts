import { createFeatureSelector, createSelector } from "@ngrx/store";
import { postState } from "./post.state";




export const POSTS_STATE_NAME = 'posts';

const getPostsState = createFeatureSelector<postState>(POSTS_STATE_NAME);

export const getposts = createSelector(getPostsState, (state) => {
    return state.posts;
  });
export const updatepost=createSelector(getPostsState,(state:any, props:any)=>{
 return state.posts.find((post:any)=>post.id===props.id)
})  
