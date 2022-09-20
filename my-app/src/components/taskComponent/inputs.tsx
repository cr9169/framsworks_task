import React, { useState } from 'react';
import ITask from '../../interfaces/Task';
import CRDTask from './crdTask';
import "./inputsStyles.css";
import { v4 as uuid } from 'uuid';

const Inputs: React.FC = () => {

    const [taskList, setTaskList] = useState<ITask[]>([]);
    const [isEdit, setIsEdit] = useState<boolean>(false); 
    const [ID, setID] = useState<string>();     
    const [indexToUpdate, setIndexToUpdate] = useState<number>(0);

    /* const isIdExists = (id: string): boolean => {
        let isExists: boolean = false;
        taskList.forEach((task: ITask) => {
            id == task.id ? isExists = true : isExists = false;
        })
        return isExists;
    } */ 

    const submitHandler = (e: any) => {
        let newTask: ITask;
        e.preventDefault();
        const {taskName, taskDescription} = e.target;
        console.log(e.target)
        if(!isEdit)
        {
            newTask = {name: taskName.value , description: taskDescription.value, id: uuid()};
            setTaskList(taskList => taskList?.concat(newTask));
        }

        else
        {
            taskList!.map((task: ITask, index: number) => {
                if(task.id == ID && indexToUpdate)
                {
                    newTask = {name: taskName.value , description: taskDescription.value, id: ID};
                    const newTaskList: ITask[] = taskList;
                    newTaskList[indexToUpdate] = newTask;
                    setTaskList(newTaskList);
                    setIsEdit(!isEdit);
                }
            });
        }
    }

    return ( <div>
        <form onSubmit={submitHandler}>
            <div id='inputs'>
                <span>Name:</span>
                <input type="text" name="taskName" />
                <span>Description:</span>
                <input type="text" name="taskDescription"/>
                <span>ID:</span>
                <input disabled={!isEdit} type="text" name="taskID"/>
            </div>
            <input  type="submit" name="submit" id='submit'/>
        </form>
        <CRDTask taskList={taskList!} setTaskList={setTaskList} isEdit={isEdit} setIsEdit={setIsEdit} indexToUpdate={indexToUpdate} ID={ID!} setID={setID} setIndexToUpdate={setIndexToUpdate}/>
    </div> );
}

export default Inputs;