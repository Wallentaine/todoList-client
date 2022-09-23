import React from 'react'
import '../styles/Navbar.css'
import {observer} from "mobx-react-lite"

const Navbar = observer(() => {
    return (
        <div className="Navbar">
            LinkTo Do List
        </div>
    )
})

export default Navbar