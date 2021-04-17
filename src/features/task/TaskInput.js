import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { newTask } from './taskSlice';


export const TaskInput = () => {
    const dispatch = useDispatch();
    const [editTitle, setEditTitle] = useState("");

    const handleTextChange = (e) => {
        setEditTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(newTask(editTitle))
        setEditTitle("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={editTitle} onChange={(e) => handleTextChange(e)} placeholder="Please type in" />
            <button>NEW</button>
        </form>
    )
}
