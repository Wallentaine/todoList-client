import React from 'react'
import classes from './StockInput.module.css'


const StockInput = (props) => {
    return (
        <input
            className={classes.StockInput}
            {...props}
        />
    )
}

export default StockInput