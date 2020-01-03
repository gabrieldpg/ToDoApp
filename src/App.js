import React, { Component } from 'react';
import ToDos from './ToDos';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'milk' },
      { id: 2, content: 'sugar' }
    ]
  }

  deleteToDo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });

    this.setState({
      todos: todos
    });
    
  }

  render() {
    return(
      <div className="todo-app container">
        <h1 className="center blue-text">To Dos:</h1>
          <ToDos todos={ this.state.todos } deleteToDo={ this.deleteToDo } />
      </div>
    );
  }
}

export default App;
