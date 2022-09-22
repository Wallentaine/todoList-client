import React from 'react'
import '../styles/Tasks.css'
import TaskModal from "./UI/modals/TaskModal";

const TaskEditor = ({visible, setVisible, action}) => {



    return (
        <TaskModal visible={visible} setVisible={setVisible}>
            <div className="TaskEditor">
                <div className="taskEditor__buttonGroup">
                    <button className="taskEditor__closeButton" onClick={() => setVisible(false)}/>
                    <button className="taskEditor__saveButton" onClick={() => alert(action)}/>
                </div>
                <input type="text" className="taskEditor__title"/>
                <div className="task__line"></div>
                <textarea className="taskEditor__body"></textarea>
            </div>
        </TaskModal>
    )
}

export default TaskEditor