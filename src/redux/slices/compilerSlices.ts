import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface compilerSliceInitialStateType {
  langs: {
    html: string;
    css: string;
    javascript: string;
  };
  currentLang: "html" | "css" | "javascript";
}

const initialState: compilerSliceInitialStateType = {
  langs: {
    html: `
<div class="container">
    <h1>To-Do List</h1>
    <div class="input-container">
        <input type="text" id="new-task" placeholder="Add a new task">
        <button onclick="addTask()">Add</button>
    </div>
    <ul id="task-list"></ul>
</div>
    `,
    css: `
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
}

h1 {
    margin: 0 0 20px;
}

.input-container {
    display: flex;
    justify-content: space-between;
}

input[type="text"] {
    flex: 1;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 3px;
}

button {
    padding: 5px 10px;
    border: none;
    background-color: #28a745;
    color: white;
    border-radius: 3px;
    cursor: pointer;
}

button:hover {
    background-color: #218838;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    background: #eee;
    margin: 5px 0;
    padding: 10px;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

li.completed {
    text-decoration: line-through;
}

li button {
    background-color: #dc3545;
    cursor: pointer;
}

li button:hover {
    background-color: #c82333;
}
    `,
    javascript: `
function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');

        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            taskList.removeChild(newTask);
        };

        newTask.appendChild(deleteButton);
        newTask.onclick = function() {
            newTask.classList.toggle('completed');
        };

        taskList.appendChild(newTask);

        taskInput.value = '';
    }
}
    `,
  },
  currentLang: "html",
};

const compilerSlice = createSlice({
  name: "compilerSlice",
  initialState,
  reducers: {
    updateLang: (
      state,
      action: PayloadAction<compilerSliceInitialStateType["currentLang"]>
    ) => {
      state.currentLang = action.payload;
    },
    updateCode: (state, action: PayloadAction<string>) => {
      state.langs[state.currentLang] = action.payload;
    },
  },
});

export default compilerSlice.reducer;
export const { updateLang, updateCode } = compilerSlice.actions;
