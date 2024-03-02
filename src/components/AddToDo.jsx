import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayCount from './DisplayCount';
import { connect } from 'react-redux';
import {addToDo} from '../redux/actions/todo';
import { v4 } from 'uuid';


const AddToDo = ({addtodo}) => {
    const [formData, setFormData] = useState({
      title: '',
      description: '',
      id:''
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      addtodo({...formData,id:v4()});
      console.log('Form submitted with data:', formData);
      setFormData({
        title: '',
        description: ''
      });
    };
  
    return (
      <Container>
        <DisplayCount />
        <h2 style={{marginTop: "40px"}}>Add ToDo</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title:</Form.Label>
            <Form.Control 
              type="text" 
              name="title" 
              value={formData.title} 
              onChange={handleInputChange} 
              required 
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description:</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={3} 
              name="description" 
              value={formData.description} 
              onChange={handleInputChange} 
              required 
            />
          </Form.Group>
          <Button style={{marginTop: "10px"}} variant="primary" type="submit">
            Add ToDo
          </Button>
        </Form>
      </Container>
    );
  };
  

  //props se jo addtodo aa rha h use map karna Reducer function se
  const mapStateToProps=(state)=>({})
  const mapDispatchToProps=(dispatch)=>({
    addtodo: (todo)=>(dispatch(addToDo(todo)))
    //dispatch k ander action pass
  })
  export default connect(mapStateToProps,mapDispatchToProps)(AddToDo);
  