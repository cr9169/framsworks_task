import React from "react";
import ITask from "../../interfaces/Task";
import "./crdTask.css";

interface IProps{
    taskList: ITask[],
    setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>,
}

const TaskList: React.FC<IProps> = ({taskList, setTaskList}) => {

    return <div id="crd-task">
        <div>{taskList!.map((task: ITask) =>
            <div>
            <p>{task.name}</p>
            <p>{task.description}</p>
            <p>{task.id}</p>
            </div>)}        
        </div>
    </div>
}

export default TaskList;
