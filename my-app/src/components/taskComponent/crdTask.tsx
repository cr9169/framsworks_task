import React, { useState } from "react";
import ITask from "../../interfaces/Task";
// import popup from "./popupComponent/popup"
import "./crdTask.css";

interface IProps{
    taskList: ITask[],
    setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>,
    setIsEdit: React.Dispatch<React.SetStateAction<boolean>>,
    isEdit: boolean
}

const CRDTask: React.FC<IProps> = ({taskList, setTaskList, setIsEdit, isEdit}) => {
    
    const deleteTask = (index: number): void => {
        const newTaskList = taskList;
        newTaskList?.splice(index, 1);
        setTaskList([...newTaskList!]);
    }

    const handleEdit = (id: string): void => {
        // if input id == task.id => update 
        // take value from inputs in the other component and set in taskList 
    }

    return <div id="crd-task">
        <div>{taskList!.map((task: ITask, index: number) =>
            <div>
            <input onClick={() => { if(!isEdit) setIsEdit(!isEdit); else handleEdit(task.id); // take value from inputs in the other component and set in taskList 
            } } type="button" value="update"></input>
            <input onClick={() => deleteTask(index)} type="button" value="delete"></input>
            <p>{task.name}</p>
            <p>{task.description}</p>
            </div>)}        
        </div>
    </div>
}

export default CRDTask;

