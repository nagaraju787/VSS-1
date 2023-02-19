import { createReducer, on } from "@ngrx/store"
import { Actions } from "@ngrx/store-devtools/src/reducer";
import { changeName, decrement, increment, reset } from "./counter.actions"
import { CounterState, initialState } from "./counter.state"

const _counterReducer=createReducer(initialState,
    on(increment,(state)=>{
         return{...state, 
                  counter:state.counter+1
       };
    }),
    on(decrement,(state)=>{
        return{...state, 
                 counter:state.counter-1
      };
   }),
   on(reset,(state)=>{
        return{...state, 
                counter:0
        };
   }),
   on(changeName,(state:any,action)=>{
    console.log(action)
    return{...state, 
            name:action.name
    };
}),
);
export function counterReducer(state:CounterState,action:Actions){
    return _counterReducer(state,action)
}