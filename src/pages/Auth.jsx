import React, {useState} from 'react'
import '../styles/Auth.css'
import AuthForm from "../components/AuthForm"
import {observer} from "mobx-react-lite"

const Auth = observer(() => {

    const [isLogin, setIsLogin] = useState(true)

    return (
        <div className="Auth">
            <div className="auth__modal">
                <div className="auth__title">{isLogin ? "Авторизация" : "Регистрация"}</div>
                <AuthForm title={isLogin ? "Войти" : "Зарегистрироваться"} isLogin={isLogin}/>
                <div className="auth__existAccount">
                    <span>{isLogin ? "Нет аккаунта?" : "Есть аккаунт?"}</span>
                    <button onClick={() => {setIsLogin(!isLogin)}}>{isLogin ? "Регистрация" : "Войти"}</button>
                </div>
            </div>
        </div>
    )
})

export default Auth