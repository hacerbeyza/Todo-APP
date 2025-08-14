import React, { useEffect, useRef, useState } from 'react'
import { LuCirclePlus } from "react-icons/lu";
import { FaClipboardList } from "react-icons/fa";
import TodoItem from './TodoItem';

const Todo = () => {
  const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []);
  const [inputText, setInputText] = useState("");
  const data = useRef();

  const addTodos = () => {
    if(inputText.trim() === "") {
      return;
    }
    
    const newTodo = {
      id: todos.length + 1,
      text: inputText,
      isComplete: false,
    }

    setTodos((prev) => [...prev, newTodo]);

    setInputText("");
  };

  const toggle = (id) => {
    setTodos((prevTodos) =>  {
      return prevTodos.map((todo) => {
        if(todo.id == id){
          return{...todo, isComplete: !todo.isComplete}
        }
        return todo;
      })
    })
  }
  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };
  

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  return (
    <div className='place-self-center bg-white w-[600px] h-[600px] p-11 rounded flex flex-col gap-6'>
        {/* Title */}
        <h1 className='text-3xl font-semibold tracking-wider flex gap-3 items-center'><FaClipboardList />Todo App</h1>

        {/* Search */}
        <div className='flex items-center justify-between rounded-full bg-[#F2EFE7] p-2'>
          <input
            type="text" 
            placeholder='Yeni görev ekle...' 
            className='bg-transparent outline-none text-lg px-3 py-1.5'
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <LuCirclePlus className='size-8 hover:scale-105 text-[#006A71]' onClick={addTodos}/>
        </div>

  {/* The tasks */}
        <div className='pt-3 pl-1 text-size-6'>
        {
          todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} toggle={toggle}
            deleteTodo={deleteTodo}/>
          ))
        }
        </div>
    </div>


  )
}

export default Todo
