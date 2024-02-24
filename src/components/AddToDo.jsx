import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const AddToDo = () => {
    const [formData, setFormData] = useState({
      title: '',
      description: ''
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
      console.log('Form submitted with data:', formData);
      setFormData({
        title: '',
        description: ''
      });
    };
  
    return (
      <Container>
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
  
  export default AddToDo;
  