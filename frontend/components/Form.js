import React from 'react'

 class Form extends React.Component {
render() {
    return (
      <form>
        <form id="todoForm" onSubmit= {this.props.onTodoFormSubmit}>

          <input 
          value={this.props.currentName}
           onChange={this.props.onTodoNameInputChange}
            type = "text"
            placeholder="Add your todo here...">
            </input>

         <input type = "submit" onSubmit ={this.props.onTodoFormSubmit}></input>
        </form>

      <button onClick={this.props.displayCompleted}>
        
        {this.props.displayCompleted ? "Hide": "Show"} Clear Completed Todos
        </button>
    </form>)
  }
}
export default Form
