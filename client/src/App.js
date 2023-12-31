import React from 'react'
import { Form } from './components/Form'
import { TodoList } from './components/TodoList'
const App = () => {
  return (
    <div className='app'>
      <h1>Todo List</h1>
      <Form/>
      <TodoList/>
    </div>
  )
}

export default App