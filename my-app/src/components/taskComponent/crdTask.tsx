import React, { useState } from "react";
import ITask from "../../interfaces/Task";
// import popup from "./popupComponent/popup"
import "./crdTask.css";

interface IProps{
    index: number,
    task: ITask,
    taskList: ITask[];
    setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const CRDTask: React.FC<IProps> = ({taskList, setTaskList, task, index}) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTask, setEditTask] = useState<string>(task.description);
    
    const deleteTask = (index: number): void => {
        const newTaskList = taskList;
        newTaskList?.splice(index, 1);
        setTaskList([...newTaskList!]);
    }

    /* const openUpdateTaskPopup = (): void => {
        
    } */ 

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTaskList(taskList.map((task) => (task.id === id ? { ...task, description: editTask } : task)));
        setEdit(false);
      };

    return <div id="crd-task">
        <div>{taskList!.map((task: ITask, index: number) =>
            <div>
                {edit ? (
                <input
                value={editTask}
                onChange={(e) => setEditTask(e.target.value)}
                />
            ) : task.isDone ? (
                <s>{task.description}</s>
            ) : (
                <span>{task.description}</span>
            )}
            <input onClick={() => deleteTask(index)} type="button" value="delete"></input>
            <p>{task.name}</p>
            <p>{task.description}</p>
            </div>)}        
        </div>
    </div>
}

export default CRDTask;

