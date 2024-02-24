import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import AddToDo from './components/AddToDo';
import DisplayToDo from './components/DisplayToDO';

function App() {
  return (
    <Container>
      <AddToDo />
      <DisplayToDo />
    </Container>
  );
}

export default App;
