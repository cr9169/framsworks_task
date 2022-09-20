import React, { useState } from "react";
import ITask from "../../interfaces/Task";
// import popup from "./popupComponent/popup"
import "./crdTask.css";

interface IProps{
    taskList: ITask[],
    setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>,
    setIsEdit: React.Dispatch<React.SetStateAction<boolean>>,
    isEdit: boolean,
    setIndexToUpdate:React.Dispatch<React.SetStateAction<number>>,
    indexToUpdate: number,
    ID: string,
    setID: React.Dispatch<React.SetStateAction<string | undefined>>
}

const CRDTask: React.FC<IProps> = ({taskList, setTaskList, setIsEdit, isEdit, indexToUpdate, setIndexToUpdate, ID, setID}) => {
    
    const deleteTask = (index: number): void => {
        const newTaskList = taskList;
        newTaskList?.splice(index, 1);
        setTaskList([...newTaskList!]);
    }

    const handleEdit = (id: string): void => {
        
        if(indexToUpdate == 0)
            setIndexToUpdate(1);
        else
            setIndexToUpdate(indexToUpdate+1)
        setID(taskList[indexToUpdate].id);
}

    return <div id="crd-task">
        <div>{taskList!.map((task: ITask, index: number) =>
            <div>
            <input onClick={() => { if(!isEdit) setIsEdit(!isEdit); else handleEdit(task.id); // take value from inputs in the other component and set in taskList 
            } } type="button" value="update"></input>
            <input onClick={() => deleteTask(index)} type="button" value="delete"></input>
            <p>{task.name}</p>
            <p>{task.description}</p>
            <p>{task.id}</p>
            </div>)}        
        </div>
    </div>
}

export default CRDTask;

