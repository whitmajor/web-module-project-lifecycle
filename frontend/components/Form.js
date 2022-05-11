import React from 'react'

export default class Form extends React.Component {
  state = {
    inputValue: ""
  }
  handleChange = (e)=>{
    this.setState({
      inputValue:e.target.value
    })
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.onTodoFormSubmit(this.state.inputValue)
    this.setState({
      inputValue:""
    })
  }
  render() {
    return (
      <div>
        <form  onSubmit= {this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.inputValue} type = "text"/>
         <button> Add Todo </button>
        </form>
      </div>
    )
  }
}
