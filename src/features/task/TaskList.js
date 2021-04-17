import React from 'react';
import { useSelector } from 'react-redux';
import { selectTask } from './taskSlice';
import { TaskItem } from './TaskItem';

const TaskList = () => {
    const task = useSelector(selectTask);
    return (
        <div>
            {task.map((value) => {
                return <TaskItem key={value.id} task={value} />
            })}
        </div>
    )
}

export default TaskList