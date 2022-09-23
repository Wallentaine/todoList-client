import {$authHost} from "./index"

export const fetchTasks = async (userId) => {
    const {data} = await $authHost.get(`api/task/${userId}`)
    return data
}

export const createTask = async (userId ,title, text) => {
    const {data} = await $authHost.post('api/task', {userId, title, text})
    return data
}

export const updateTask = async (id, title, text) => {
    const {data} = await $authHost.put('api/task', {id, title, text})
    return data
}

export const deleteTask = async (id) => {
    const {data} = await $authHost.delete('api/task', {data: {id}})
    return data
}

