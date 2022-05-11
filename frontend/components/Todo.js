import React from 'react'

class Todo extends React.Component {
handleClick =()=>{
this.props.handleToggle(this.props.todo.id)
console.log(this.props.todo.id)
}
  render(){
    return (<li onClick={this.handleClick}> {this.props.todo.name}{this.props.todo.completed ?<span> -completed</span>:<span></span>}</li>)
  }
 }
export default Todo
