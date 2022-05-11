import React from 'react'
import TodoList from "./TodoList"
import axios from "axios"
import Form from "./Form"

const URL = 'http://localhost:9000/api/todos'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
    todos: [],
    currentName :"",
    error:"",
    displayCompleted: true,
    
    }
  }

 fetchAllTodos=()=>{
    axios.get(URL)
    .then(resp=>{
   this.setState({
    ...this.state,
    todos: resp.data.data
   })
      })
      .catch(err=> {
        this.setState({...this.state, err: err.response.data.message})
      })
  }
componentDidMount(){
  this.fetchAllTodos()
}
resetForm =()=>{
  this.setState({...this.state, currentName:""})
}


postTodo = ()=>{
  axios.post(URL,{name: this.state.currentName})
    .then(resp=>{
     
      this.setState({
        ...this.state,
        todos: this.state.todos.concat(resp.data.data)})
    
    })
    .catch(err=> {
    this.setState({...this.state, error: err.response.data.message})
})
}
onTodoNameInputChange = evt =>{
  const {value} = evt.target
  this.setState({ ...this.state, currentName: value})
}
onTodoFormSubmit=evt=>{
  evt.preventDefault()
  this.postTodo();
}

toggleCompleted = id=>{
  axios.patch(`${URL}/${id}`)
  .then(res=>{
    this.setState({ ...this.state, todos: this.state.todos.map(info=>{
      if(info.id !== id) return info
      return res.data.data
    })
  })
  })
}
toggleDisplayCompleted =()=>{
  this.setState({...this.state, displayCompleted: !this.state.displayCompleted})
}
  render() {
    return(
      <div>
    <div id = "error" > Error: {this.state.error}</div>
      <TodoList
      todos = {this.state.todos}
      toggleCompleted = {this.toggleCompleted}
    displayCompleted ={this.state.displayCompleted}
      />
      <Form
      toggleDisplayCompleted = {this.toggleDisplayCompleted}
      onTodoFormSubmit ={this.onTodoFormSubmit}
      onTodoNameInputChange = {this.onTodoNameInputChange}
      todoNameInput = {this.state.currentName}
      displayCompleted= {this.state.displayCompleted}

     

      />
    </div>

    )
  }
}
export default App