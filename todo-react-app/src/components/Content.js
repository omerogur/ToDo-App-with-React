import React from 'react'
import Footer from './Footer'
import TodoList from './TodoList'

function Content({todoList,todoFilter,filterSet,todosSet}) {
  return (
    <div>
        <section className="main">
		<input className="toggle-all" type="checkbox"/>
        <TodoList todos={todoList} setTodos={todosSet}/>
        </section>
        <Footer todoFilter={todoFilter} filterSet={filterSet}  todos={todoList} setTodos={todosSet}/>
    </div>
  )
}

export default Content