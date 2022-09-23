import {
    MAIN_ROUTE,
    AUTH_ROUTE,
    ERROR_ROUTE
} from "../utils/consts"

import Tasks from '../pages/Tasks'
import Auth from '../pages/Auth'
import Error from '../pages/Error'

export const unauthorizedRoutes = [
    {
        path: AUTH_ROUTE,
        Component: Auth
    }
]

export const privateRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Tasks
    }
]

export const publicRoutes = [
    {
        path: ERROR_ROUTE,
        Component: Error
    },
]