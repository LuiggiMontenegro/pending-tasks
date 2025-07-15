
import { Task } from './Task'


type TaskLists = {
    taskList: string[]
    deleteTask: (index: number) => void
}

export const TaskList = ({ taskList, deleteTask }: TaskLists) => {
    return (
        <div className='taskList'>{
            taskList.map((task, index) => (
                <Task key={index} task={task} deleteTask={() => deleteTask(index)}></Task>
            ))

        }</div>
    )
}