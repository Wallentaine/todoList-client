import {makeAutoObservable} from "mobx"

export default class TaskStore {
    constructor() {
        this._tasks = []

        makeAutoObservable(this)
    }

    setTasks(tasks) {
        this._tasks = tasks
    }

    get tasks() {
        return this._tasks
    }
}