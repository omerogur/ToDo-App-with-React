import React from 'react'

function Footer({ todoFilter, filterSet,todos,setTodos }) {

    //filtreleme
    const clearCompleted = () =>{
        const cleared = todos.filter(item => {
            return item.completed == false
        })
        setTodos(cleared)

    }
    return (
        <div>
            <footer className="footer">
                <span className="todo-count">
                    <strong>{/*todos.length*/}</strong>
                    items left
                </span>

                <ul className="filters">
                    <li>
                        <a className={todoFilter === "all" ? "selected" : ""} onClick={() => filterSet("all")} >All</a>
                    </li>
                    <li>
                        <a className={todoFilter === "active" ? "selected" : ""} onClick={() => filterSet("active")}>Active</a>
                    </li>
                    <li>
                        <a className={todoFilter === "completed" ? "selected" : ""} onClick={() => filterSet("completed")}>Completed</a>
                    </li>
                </ul>

                <button className="clear-completed" onClick={clearCompleted}>
                    Clear completed
                </button>
            </footer>
        </div>
    )
}

export default Footer