import './App.css';
import React , {useState,useEffect} from "react"
import Form from "./components/Form"
import TodoList from './components/TodoList';
function App() {
  // States
  const [inputText ,setInputText] = useState("")
  const [todos,setTodos] = useState([])
  const [status,setStatus] = useState("All")
  const [filterdTodos,setfilteredTodos] = useState([])
  // Functions
  const filterHandler = () => {
    switch(status) {
      case "completed" :
        setfilteredTodos(todos.filter(todo => todo.completed===true))
        break;
      case "uncompleted" :
        setfilteredTodos(todos.filter(todo => todo.completed===false))
        break;
      default :
        setfilteredTodos(todos)
        break;     
    }
  } 
  // Use Effect
    useEffect(() =>{
      filterHandler()
    },[todos ,status])

  return (
    <div className="App">
      <Form 
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      status={status}
      setStatus={setStatus}
      />

      <TodoList 
      todos={todos}
      setTodos={setTodos}
      filteredTodos={filterdTodos}
      />
    </div>
  );
}

export default App;

