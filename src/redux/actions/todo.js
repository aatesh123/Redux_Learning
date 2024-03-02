import { ADD_TODO ,DELETE_TODO,UPDATE_TODO } from "./action-types";


export const addToDo=(todo)=>({
        type:ADD_TODO,
        payload : todo
})
export const deleteToDo=(id)=>({
    type:DELETE_TODO,
    payload : id
})
export const updateToDo=(todo,id)=>({
    type:UPDATE_TODO,
    payload : {id,todo}
})
//we are returnning object in actions