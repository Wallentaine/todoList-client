import React from 'react'
import classes from './StockButton.module.css'

const StockButton = ({children, ...props}) => {
    return (
        <button className={classes.StockButton} {...props}>
            {children}
        </button>
    )
}

export default StockButton