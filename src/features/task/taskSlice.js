import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    idCount: 3,
    tasks: [
        {
            id: 1,
            title: "TASK A",
            completed: false
        },
        {
            id: 2,
            title: "TASK B",
            completed: true
        },
        {
            id: 3,
            title: "TASK C",
            completed: false
        }
    ]
};


export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        newTask: (state, action) => {
            console.log(state.value)
            state.idCount++;
            const newItem = {
                id: state.idCount,
                title: action.payload,
                completed: false
            }
            state.tasks = [newItem, ...state.tasks]
        },
        completeTask: (state, action) => {
            const task = state.tasks.find((v) => v.id === action.payload.id);
            if (task) {
                task.completed = !task.completed
            }
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        deleteTask: (state, action) => {
            console.log(action.payload.id)
            // action.payloadはpropsから渡ってきたvalue.idと等価
            state.tasks = state.tasks.filter((v) => v.id !== action.payload.id)
        },
    },

});

export const { newTask, completeTask, deleteTask } = taskSlice.actions;

export const selectTask = (state) => state.task.tasks;



export default taskSlice.reducer;
