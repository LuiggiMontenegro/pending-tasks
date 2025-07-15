import { TaskList } from './TaskList'
import { useState } from 'react'


export const TodoApp = () => {

  const [newTask, setNewTask] = useState<string>('')

  const [taskList, setTaskList] = useState<string[]>([])

  const handleTask = () => {
      if(newTask.trim() <= 1) return;
      setTaskList(e => [...e, newTask])
      setNewTask('')
  };

  const handleDeleteTask = (index: number) => {
    setTaskList( tasks => tasks.filter((_,i) => i !== index))
  };


  return (
    <div>
      <h1>Lista de tareas</h1>
      <div className='flex'>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder='Nueva tarea'

        />
        <button onClick={handleTask} className='btn'>Add</button>
      </div>
      <TaskList taskList={taskList} deleteTask={handleDeleteTask} ></TaskList>



    </div>
  )
}
