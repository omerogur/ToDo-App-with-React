import React from 'react'

function TodoList({todos,setTodos}) {
   
	 const changeCompleted = (id) => {
		 const filteredArray = todos.map(item => {
			 if(item.id==id){
				 item.completed =!item.completed
				 return item
			 }else{
				 return item
			 }
		 })
		 console.log(filteredArray);
		
		 setTodos(filteredArray)
	 }
	
	 const destroy = (id) => {
          const destroyedTodos = todos.filter((item) => {
			  return item.id !==id
		  })
		  setTodos(destroyedTodos)
	 }


  return (
	  
    <div>
        <label htmlFor="toggle-all">
			Mark all as complete
		</label>

		<ul className="todo-list">
		  {	todos.map((item,index) => 
                <li key={index} className={item.completed ? "completed" : ""}>
				<div className="view">
					<input 
					className="toggle" 
					type="checkbox" onChange={() => changeCompleted(item.id)}
					checked={item.completed}	
					/> 
					<label >{item.title} </label>
					<button 
					className="destroy"
					onClick={() => destroy(item.id)}
					></button>
				</div>
			</li>
            )}
			
		</ul>
    </div>
  )
}

export default TodoList