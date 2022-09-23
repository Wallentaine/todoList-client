import React, {useContext, useState} from 'react'
import '../styles/Auth.css'
import {useNavigate} from 'react-router-dom'
import StockInput from "./UI/inputs/StockInput"
import StockButton from "./UI/buttons/StockButton"
import {Context} from "../index"
import {login, registration} from "../http/userAPI"
import {MAIN_ROUTE} from "../utils/consts"

const AuthForm = ({...props}) => {

    const {user} = useContext(Context)

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const auth = async (e) => {
        e.preventDefault()
        let data
        try {
            if (props.isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(data)
            user.setIsAuth(true)
            navigate(MAIN_ROUTE)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return (
        <form className="auth__form">
            <StockInput
                type="text"
                placeholder="Введите e-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <StockInput
                type="password"
                placeholder="Введите пароль"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <StockButton onClick={auth}>{props.title}</StockButton>
        </form>
    )
}

export default AuthForm