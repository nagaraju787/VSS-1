import { post } from "../postModels/post.model";

export interface postState{
    posts:post[];
}

export const initialState:postState={
    posts:[
        {id:1,title:"nagaraju",description:"b.tech"},
        {id:2,title:"nagaraju",description:"b.tech"},
        {id:3,title:"nagaraju",description:"b.tech"},
        {id:3,title:"nagaraju",description:"b.tech"},
    ]
}