import { Component } from 'react';
import Container from '../components/UI/Container';
import TodoForm from '../components/Todo/TodoForm';
import TodoList from '../components/Todo/TodoList';

const storedItems = localStorage.getItem('todos')
  ? JSON.parse(localStorage.getItem('todos'))
  : [];

class TodoPage extends Component {
  state = {
    items: storedItems,
  };

  addTodo = (todo) => {
    this.setState((prevState) => {
      return {
        items: [...prevState.items, todo],
      };
    });
  };

  deleteTodo = (id) => {
    this.setState(({ items }) => ({
      items: items.filter((item) => item.id !== id),
    }));
  };

  completeTodo = (id) => {
    this.setState(({ items }) => ({
      items: items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            status: 'completed',
          };
        }

        return item;
      }),
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.items !== this.state.items) {
      localStorage.setItem('todos', JSON.stringify(this.state.items));
    }
  }

  render() {
    return (
      <div>
        <Container>
          <TodoForm onSubmit={this.addTodo} />
          <TodoList
            items={this.state.items}
            onDelete={this.deleteTodo}
            onComplete={this.completeTodo}
          />
        </Container>
      </div>
    );
  }
}

export default TodoPage;
