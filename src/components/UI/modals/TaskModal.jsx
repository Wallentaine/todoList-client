import React from 'react'
import classes from './TaskModal.module.css'

const TaskModal = ({children, visible, setVisible}) => {

    const rootClasses = [classes.TaskModal]

    if (visible) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.taskModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default TaskModal