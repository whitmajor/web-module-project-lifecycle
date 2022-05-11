import React from 'react'
import Todo from "./Todo"

export default class TodoList extends React.Component {


  render() {
    return (
      <div id = "todos">
        <h2>My Todo List</h2>
        {
          this.props.todos.reduce((acc,info)=>{
            if(this.props.displayCompleted || !info.completed) return acc.concat(
              <div onClick = {this.props.toggleCompleted(info.id)} key={info.id}>
                {info.name}{info.completed ? "✔️" : ''} </div>
            )
            return acc
          },[])
        }

      </div>
    )
   
  }
}
