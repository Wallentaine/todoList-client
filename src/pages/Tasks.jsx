import React, {useState} from 'react'
import '../styles/Tasks.css'
import TaskItem from "../components/TaskItem"
import TaskEditor from "../components/TaskEditor"

const Tasks = () => {

    const [modal, setModal] = useState(false)

    return (
        <div className="Tasks">
            <TaskItem/>
            <button className="createTask" onClick={() => setModal(true)}/>
            <TaskEditor visible={modal} setVisible={setModal} action={"create"}/>
        </div>
    )
}

export default Tasks