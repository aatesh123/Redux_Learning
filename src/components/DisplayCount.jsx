import React from 'react'
import { connect } from 'react-redux'

const DisplayCount = ({todos}) => {
  return (
    <div>
       <h1>{todos.length}</h1>
    </div>
  )
}

const mapStateToProps=(state)=>{
  return {todos : state.todoReducer}
}
 const mapDispatchToProps=(dispatch)=>({
  // addtodo: (todo)=>(dispatch(addToDo(todo)))
   //dispatch k ander action pass
 })
 export default connect(mapStateToProps,mapDispatchToProps)(DisplayCount);

