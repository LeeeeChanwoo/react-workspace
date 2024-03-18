import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <Router>
      <Navbar>
        <NavbarBrand href="/todolist">List</NavbarBrand>
        <NavbarBrand href="/counter">Add New Movie</NavbarBrand>
      </Navbar>
      <div className='container'>
        <Routes>
          <Route path="/todolist" element = {<TodoList/>}/>
          <Route path="/counter" element = {<Counter/>}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
