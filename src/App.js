import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav'
import { useState, useEffect } from 'react';
import Todo from './views/Todo';
import Covid from './views/Covid';
import { CountDown, NewCountDown } from './views/CountDown';

const App = () => {

  let [name, setName] = useState('Milk');
  const [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Watching TV', type: "Home" },
    { id: 'todo2', title: 'Watching Movie', type: "Home" },
    { id: 'todo3', title: 'Playing Game', type: "Movie" },
    { id: 'todo4', title: 'Playing Soccer', type: "Movie" },

  ]);

  const handleEventClick = (event) => {
    if (!address) {
      alert('Empty input')
      return;
    }
    let newTodo = { id: Math.floor(Math.random() * 10) + 1, title: address, type: 'Home' };
    setTodos([...todos, newTodo])
    setAddress('')
  }
  const handleEventOnchange = (event) => {

    setAddress(event.target.value)

  }

  const deleteDataTodo = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter(item => item.id !== id)
    setTodos(currentTodos)
  }

  const onTimeup = () => {
    // alert('Times up')
  }

  return (
    <div className="App">

      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <CountDown onTimeup={onTimeup} />
        <span>-------------------------</span>
        <NewCountDown />
        <h1>Hello World and {name}</h1>
        <Covid />

        {/* <Todo
          todos={todos}
          title={'All todos'}
          deleteDataTodo={deleteDataTodo}
        />


        <Todo
          todos={todos.filter(item => item.type === 'Movie')}
          title={`Home Todos`}
          deleteDataTodo={deleteDataTodo}
        /> */}
        {/* <input type="text" value={address} onChange={(event) => handleEventOnchange(event)} />
        <button type="button" onClick={(event) => handleEventClick(event)}>Click me</button> */}
      </header>
    </div>
  );
}

export default App;
