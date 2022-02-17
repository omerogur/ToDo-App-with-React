import Header from "./components/Header";
import  "./App.css"
import Content from "./components/Content";
import { useState , useEffect} from "react";
function App() {

  const [todos,setTodos] = useState([
    {
      title:"deneme",
      id: "123",
      completed:false,
    },
    {
      title:"deneme2",
      id: "000",
      completed:false,
    },
  ])
  const [filter,setFilter] = useState("all")

  const [filteredList,setFilteredList] =  useState([])
  
  useEffect(() => {
    if(filter=="all"){
      setFilteredList(todos)
    }else if (filter=="active"){
      const newFiltered = todos.filter((item => {
        return item.completed == false
      }))
      setFilteredList(newFiltered)
    }else if (filter=="completed"){
      const newFiltered = todos.filter((item => {
        return item.completed == true
      }))
      setFilteredList(newFiltered)
    }
  },[filter,todos])

  return (
    <div className="todoapp">
      <Header todoSet={setTodos} todos={todos}/>
      <Content todoList={filteredList} todoFilter={filter} filterSet={setFilter} todosSet={setTodos} />
    </div>
  );
}

export default App;
