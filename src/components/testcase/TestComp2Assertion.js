import React from 'react'
import { Link } from "react-router-dom"

function TestComp2Assertion({
    numberOfIncompleteTasks
}) {
    return (
        <div className="todo-footer">
            <p>{numberOfIncompleteTasks} {numberOfIncompleteTasks === 1 ? "task" : "tasks"} left</p>
            <Link to="/userlist">Followers</Link>
        </div>
    )
}

export default TestComp2Assertion