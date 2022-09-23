import React, {useContext} from 'react'

import '../styles/Error.css'
import {Context} from "../index"
import {MAIN_ROUTE} from "../utils/consts"
import {useNavigate} from "react-router-dom"

const Error = () => {

    const {user} = useContext(Context)

    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('token')
        user.setUser({})
        user.setIsAuth(false)
        navigate(MAIN_ROUTE)
    }

    return (
        <div className="Error">
            <button onClick={logout}>
                Выйти
            </button>

        </div>
    )
}

export default Error