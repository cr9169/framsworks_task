import React, { useState } from "react";
import ITask from "../../interfaces/Task";
// import popup from "./popupComponent/popup"
import "./crdTask.css";

interface IProps{
    taskList: ITask[];
    setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const CRDTask: React.FC<IProps> = ({taskList, setTaskList}) => {

    const deleteTask = (index: number): void => {
        const newTaskList = taskList;
        newTaskList?.splice(index, 1);
        setTaskList([...newTaskList!]);
    }

    const openUpdateTaskPopup = (): void => {
        
    }

    return <div id="crd-task">
        <div>{taskList!.map((task: ITask, index: number) =>
            <div>
            <input onClick={() => openUpdateTaskPopup()} type="button" value="update"></input>
            <input id='taskList[taskList]' onClick={() => deleteTask(index)} type="button" value="delete"></input>
            <p>{task.name}</p>
            <p>{task.description}</p>
            </div>)}        
        </div>
    </div>
}

export default CRDTask;

