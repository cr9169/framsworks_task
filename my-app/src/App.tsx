import React, { useState } from "react";
import ITask from "./interfaces/Task";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import Inputs from "./components/taskComponent/inputs";
import TaskList from "./components/taskComponent/taskList";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <div id="links">
            <Link to="/crud"> CRUD </Link>
            <Link to="/list"> List </Link>
          </div>
        </nav>
        <Routes>
          <Route path="/crud" element={<Inputs taskList={taskList} setTaskList={setTaskList}/>}/>
          <Route path="/list" element={<TaskList taskList={taskList} setTaskList={setTaskList}/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Inputs taskList={taskList} setTaskList={setTaskList}/>
      <TaskList taskList={taskList} setTaskList={setTaskList}/> */}
    </div>
  );
}

export default App;
