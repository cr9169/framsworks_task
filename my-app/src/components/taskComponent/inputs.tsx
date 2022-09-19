import { isDocument } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import { idText } from 'typescript';
import ITask from '../../interfaces/Task';
import CRDTask from './crdTask';
import "./inputsStyles.css";

const Inputs: React.FC = () => {

    const [taskList, setTaskList] = useState<ITask[]>([]);

    const submitHandler = (e: any) => {
        e.preventDefault();
        const {taskName, taskDescription} = e.target;
        console.log(e.target)
        setTaskList(taskList => taskList?.concat({name: taskName.value , description: taskDescription.value, id: Date.now(), isDone: false}));
    }

    return ( <div>
        <form onSubmit={submitHandler}>
            <div id='inputs'>
                <span>Name:</span>
                <input type="text" name="taskName" />
                <span>Description:</span>
                <input type="text" name="taskDescription"/>
            </div>
            <input  type="submit" name="submit" id='submit'/>
        </form>
        <CRDTask taskList={taskList!} setTaskList={setTaskList}/>
    </div> );
}

export default Inputs;