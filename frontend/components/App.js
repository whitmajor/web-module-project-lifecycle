import React from 'react'
import TodoList from "./TodoList"
import axios from "axios"

const URL = 'http://localhost:9000/api/todos'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      name: "",
      id: 0,
      completed: false,
    
    }
  }

  componentDidMount(){
    axios.get(URL)
    .then(resp=>{
      console.log(resp.data.data)
      const todo = resp.data.data;
      this.setState({
        todo: todo.name,
      })
      })
  }
postTodo = (name)=>{
  axios.post(URL,name)
  .then(resp=>{
    console.log("your post",resp)
  })
}

  render() {
    return(
      <TodoList/>



    )
  }
}
export default App