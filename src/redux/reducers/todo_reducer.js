import { ADD_TODO,DELETE_TODO,UPDATE_TODO } from "../actions/action-types"

const intialState=[]
export default (state=intialState,action)=>{

    switch(action.type){
        case ADD_TODO:
            return [...state,action.payload];
        case DELETE_TODO:
            const newState=state.filter((todo)=>
                todo.id!==action.payload
            )  
            return newState;
        case UPDATE_TODO:
            const nState=state.map((todo)=>{
                if(todo.id===action.payload.id)
                {
                    todo.title=action.payload.todo.title
                    todo.description=action.payload.todo.description
                }
                return todo;
            })   
            return nState;   
        default :
            return state ;
    }

}