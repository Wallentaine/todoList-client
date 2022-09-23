import React, {useContext, useState} from 'react'
import '../styles/Tasks.css'
import TaskModal from "./UI/modals/TaskModal"
import {createTask, deleteTask, updateTask} from "../http/taskAPI"
import {Context} from "../index"


const TaskEditor = ({visible, setVisible, action, id, title, text}) => {

    const {user} = useContext(Context)
    const {task} = useContext(Context)

    const [titleField, setTitleField] = useState(title ? title : "")
    const [textField, setTextField] = useState(text ? text : "")

    const closeModal = () => {
        setTitleField(title)
        setTextField(text)
        setVisible(false)
    }

    const actionClick = async (e) => {
        e.preventDefault()
        let data
        try {
            if (action === "create") {
                data = await createTask(user.user.id, titleField, textField)
                task.setTasks([...task.tasks, data])
                setTitleField('')
                setTextField('')
            } else if (action === "change") {
                data = await updateTask(id, titleField, textField)
                task.setTasks(task.tasks.map((item) => {
                    if (item.id === id) {
                        item.title = titleField
                        item.text = textField
                    }
                    return item
                }))
            }
            setVisible(false)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    const destroyTask = async () => {
        let data
        try {
            data = await deleteTask(id)
            setVisible(false)
            task.setTasks(task.tasks.filter((item) => item.id !== id))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <TaskModal visible={visible} setVisible={setVisible}>
            <div className="TaskEditor">

                <div className="taskEditor__buttonGroup">
                    <button className="taskEditor__closeButton" onClick={closeModal}/>
                    <button className="taskEditor__saveButton" onClick={actionClick}/>
                    {action === "change" ? <button className="taskEditor__trashButton" onClick={destroyTask}/> : ''}
                </div>

                <input
                    type="text"
                    className="taskEditor__title"
                    value={titleField}
                    onChange={(e) => setTitleField(e.target.value)}
                />
                <div className="task__line"></div>
                <textarea
                    className="taskEditor__body"
                    value={textField}
                    onChange={(e) => setTextField(e.target.value)}
                />
            </div>
        </TaskModal>
    )
}

export default TaskEditor