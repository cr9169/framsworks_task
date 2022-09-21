import React, { useState } from 'react';
import ITask from '../../interfaces/Task';
import CRDTask from './crdTask';
import "./inputsStyles.css";
import { v4 as uuid } from 'uuid';

interface IProps {
    taskList: ITask[],
    setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>
}

const Inputs: React.FC<IProps> = ({taskList, setTaskList}) => {

    const [isEdit, setIsEdit] = useState<boolean>(false); 
    const [ID, setID] = useState<string>();     

    const submitHandler = (e: any): void => {
        let newTask: ITask;
        e.preventDefault();
        const {taskName, taskDescription} = e.target;
        if(!isEdit)
        {
            newTask = {name: taskName.value , description: taskDescription.value, id: uuid()};
            setTaskList(prevTaskList => prevTaskList?.concat(newTask));
        }

        else
        {
            taskList!.map((task: ITask, index: number) => {
                if(task.id == ID)
                {
                    newTask = {name: taskName.value , description: taskDescription.value, id: ID};
                    let newTaskList: ITask[] = taskList;
                    newTaskList[index] = newTask;
                    setTaskList(newTaskList);
                }
            });
            setIsEdit(false);
            setID("");
        }
    }

    return ( <div>
        <form id="#myform" onSubmit={submitHandler}>
            <div id='inputs'>
                <span>Name:</span>
                <input type="text" name="taskName" />
                <span>Description:</span>
                <input type="text" name="taskDescription"/>
                {/* <span>ID:</span>
                <input disabled={!isEdit} type="text" name="taskID" value={ID} onChange={event => setID(event.target.value)}/> */}
            </div>
            <input type="submit" name="submit" id='submit'/>
        </form>
        <CRDTask taskList={taskList!} setTaskList={setTaskList} isEdit={isEdit} setIsEdit={setIsEdit} ID={ID!} setID={setID}/>
    </div> );
}

export default Inputs;