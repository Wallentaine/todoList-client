import React, {useState} from 'react'
import TaskEditor from "./TaskEditor"

const TaskItem = () => {

    const [modal, setModal] = useState(false)

    return (
        <div className="task" onClick={() => setModal(!modal)}>
            <div className="task__title">Lorem ipsum!</div>
            <div className="task__line"></div>
            <div className="task__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis, minima, quod. Eum harum iusto magnam placeat!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis, minima, quod.
            </div>

            <TaskEditor visible={modal} setVisible={setModal} action={"change"}/>
        </div>
    )
}

export default TaskItem