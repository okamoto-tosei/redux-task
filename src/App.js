import React from 'react';
import TaskList from './features/task/TaskList'
import { Counter } from './features/counter/Counter';
import './App.css';
import { TaskInput } from './features/task/TaskInput';
import { Fetch } from './features/fetch/Fetch'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <TaskInput />
        <TaskList />
        <Fetch />
      </header>
    </div>
  );
}

export default App;
