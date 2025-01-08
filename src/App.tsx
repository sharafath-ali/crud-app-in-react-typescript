import { useState } from 'react'
import './App.css'
import { InputFields } from "./components/InputFields"
import { Todo } from './model'
import TodoList  from "./components/todoListCom"

function App() {
  const [todo, setTodo] = useState<string>("")
  const [todoList, setTodoList] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      setTodoList([...todoList, { id: todoList.length + 1, todo, isDone: false }])
      setTodo("")
    }
  }
 
  console.log(todoList)
  return (
    <div className='App'>
      <span>Taskify</span>
      <InputFields todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todoList} setTodos={setTodoList} />
    </div>
  )
}

export default App
