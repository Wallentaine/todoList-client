import React, {useContext, useEffect, useState} from 'react'
import '../styles/Tasks.css'
import TaskItem from "../components/TaskItem"
import TaskEditor from "../components/TaskEditor"
import {Context} from "../index"
import {fetchTasks} from "../http/taskAPI"
import {observer} from "mobx-react-lite"

const Tasks = observer(() => {

    const {user} = useContext(Context)
    const {task} = useContext(Context)

    const [modal, setModal] = useState(false)
    const [active, setActive] = useState(false)


    useEffect(() => {
        fetchTasks(user.user.id).then((data) => {
            task.setTasks(data)
        })
    }, [task])

    return (
        <div className="Tasks">
            {task.tasks.map(task =>
                <TaskItem key={task.id} task={task} active={active} setActive={setActive}/>
            )}

            <button className={"createTask" + " " + (modal === false ? "" : "hide")} onClick={() => setModal(true)}/>
            <TaskEditor visible={modal} setVisible={setModal} action={"create"}/>
        </div>
    )
})

export default Tasks