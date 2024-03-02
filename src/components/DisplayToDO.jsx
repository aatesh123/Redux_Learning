import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import DisplayCount from './DisplayCount';
import { connect } from 'react-redux'
import { deleteToDo } from '../redux/actions/todo';

const DisplayToDo = ({todos,deleteToDo}) => {

  return (
    <Container>
      <DisplayCount />
      <h2 style={{marginTop: "40px"}}>ToDos</h2>
      {todos.map(todo => (
        <Card key={todo.id} className="mb-3">
          <Card.Body>
            <Card.Title>{todo.title}</Card.Title>
            <Card.Text>{todo.description}</Card.Text>
            <Button onClick={event=>deleteToDo(todo.id)} variant='danger'>DELETE</Button>
          </Card.Body>
        </Card>
        
      ))}
    </Container>
  );
};

const mapStateToProps=(state)=>{
   return {todos : state.todoReducer}
}
  const mapDispatchToProps=(dispatch)=>({
   // addtodo: (todo)=>(dispatch(addToDo(todo)))
    //dispatch k ander action pass
     deleteToDo: (id)=>(dispatch(deleteToDo(id)))
  })
  export default connect(mapStateToProps,mapDispatchToProps)(DisplayToDo);
