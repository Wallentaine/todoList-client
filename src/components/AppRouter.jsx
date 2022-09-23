import React, {useContext} from 'react'
import {Context} from '../index'
import {Route, Routes, Navigate} from 'react-router-dom'
import {privateRoutes, publicRoutes, unauthorizedRoutes} from "../router"
import {observer} from "mobx-react-lite"
import {AUTH_ROUTE, ERROR_ROUTE} from "../utils/consts"

const AppRouter = observer(() => {

    const {user} = useContext(Context)

    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />}/>
            )}
            {!user.isAuth && unauthorizedRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />}/>
            )}
            {user.isAuth && privateRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />}/>
            )}
            {!user.isAuth ?
                <Route path="*" element={<Navigate to={AUTH_ROUTE}/>}/>
                :
                <Route path="*" element={<Navigate to={ERROR_ROUTE}/>}/>
            }
        </Routes>
    )
})

export default AppRouter