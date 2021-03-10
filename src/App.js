import React from "react";

import TodoItem from "./TodoItem";
import todosdata from "./todosdata";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosdata
    };
    this.handleChange = this.handleChange.bind(this);
    console.log("Hello World")
  }

  handleChange(id) {
    let updatedTodos=this.state.todos.map(todo=>{
      if(todo.id===id){
        todo.completed=!todo.completed
      }
      return todo
    })
    this.setState({
      todos:updatedTodos
    })
  }

  render() {
    const todoItems = this.state.todos.map((item) => (
      <TodoItem item={item} key={item.id} handleChange={this.handleChange} />
    ));
    return <div className="todo-list">
      <h1>Todo-App</h1>
    {todoItems}</div>;
  }
}
export default App;
