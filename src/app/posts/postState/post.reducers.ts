import { createReducer, on } from "@ngrx/store"
import { Actions } from "@ngrx/store-devtools/src/reducer";
import { addPost, loadPosts } from "./post.actions";
import { initialState, postState } from "./post.state";


 const _postReducers=createReducer(
   initialState,
   on(loadPosts,(state)=>{
      return {
        ...state,
      }
    }
   ),
   on(addPost,(state,action)=>{
    let post={...action.post}
     post.id=state.posts.length+1
    return {
      ...state,
      posts:[...state.posts,post]
    }
  }
 )
 )

 export function postReducers(state:postState,actions:Actions){
    return _postReducers(state,actions)
 }