import React from "react";
import ITask from "../../interfaces/Task";
import "./crdTask.css";

interface IProps{
    taskList: ITask[],
    setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>,
    setIsEdit: React.Dispatch<React.SetStateAction<boolean>>,
    isEdit: boolean,
    ID: string,
    setID: React.Dispatch<React.SetStateAction<string | undefined>>
}

const CRDTask: React.FC<IProps> = ({taskList, setTaskList, setIsEdit, isEdit, ID, setID}) => {
    
    const deleteTask = (index: number): void => {
        const newTaskList = taskList;
        newTaskList?.splice(index, 1);
        setTaskList([...newTaskList!]);
    }

    const handleEdit = (id: string): void => {
        setID(id);
}

    return <div id="crd-task">
        <div>{taskList!.map((task: ITask, index: number) =>
            <div>
            {task.id == taskList[0].id ?
                (
                <><input onClick={() => {
                            if (!isEdit)
                                setIsEdit(!isEdit); else
                                handleEdit(task.id);
                        } } type="button" value="update"></input><br /><br /></>
                ) : (<br />)
            }
            <input onClick={() => deleteTask(index)} disabled={isEdit} type="button" value="delete"></input>
            <p>{task.name}</p>
            <p>{task.description}</p>
            <p>{task.id}</p>
            </div>)}        
        </div>
    </div>
}

export default CRDTask;

