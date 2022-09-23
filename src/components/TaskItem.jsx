import React, {useState} from 'react'
import TaskEditor from "./TaskEditor"

const TaskItem = ({task, active, setActive}) => {

    const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal(!modal)
        setActive(!active)
    }

    return (
        <div className="task" onClick={openModal}>
            <div className="task__title">{task.title}</div>
            <div className="task__line"></div>
            <div className="task__text">{task.text}</div>

            <TaskEditor visible={modal} setVisible={setModal} action={"change"} id={task.id} title={task.title} text={task.text}/>
        </div>
    )
}

export default TaskItem