import React, { useState } from 'react';
import { Container, Card } from 'react-bootstrap';

const DisplayToDo = () => {
    const [todos,settodos]=useState([
        {
           title: "main hoon don",
           description : "tu h don"
        },
        {
            title: "kon h  don",
            description : "tum hi ho don"
        }
    ])
  return (
    <Container>
      <h2 style={{marginTop: "40px"}}>ToDos</h2>
      {todos.map(todo => (
        <Card key={todo.id} className="mb-3">
          <Card.Body>
            <Card.Title>{todo.title}</Card.Title>
            <Card.Text>{todo.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default DisplayToDo;
