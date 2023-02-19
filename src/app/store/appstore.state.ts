import { counterReducer } from "../counter/counterState/counter.reducers";
import { CounterState } from "../counter/counterState/counter.state";
import { postReducers } from "../posts/postState/post.reducers";
import { postState } from "../posts/postState/post.state";

export interface appState{
    counter:CounterState,
    posts:postState
}

export const appReducers={
    counter:counterReducer,
    posts:postReducers
}


