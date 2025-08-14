import React from 'react'
import { FaRegCircle, FaRegTrashAlt, FaRegCheckCircle } from "react-icons/fa";

const TodoItem = ({todo, toggle, deleteTodo}) => {
  return (
    <div className='w-full flex items-center gap-4 py-4 p-2 border-b pb-3 cursor-pointer' onClick={()=> toggle(todo.id)}>
       {todo.isComplete ? (
         <FaRegCheckCircle className='size-5 text-[#006A71]'/>
       ) : (
         <FaRegCircle className='size-5 text-[#006A71]'/>
       )}



      <p className='flex-1 text-left'>{todo.text}</p>
      <FaRegTrashAlt className='size-5 hover:scale-110' onClick={() => deleteTodo(todo.id)}/>
    </div>
  )
}

export default TodoItem
