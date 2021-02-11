import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './TodoList.module.css';

const todoStyles = {
  todoItem: {
    position: 'relative',
    width: '100%',
    border: '1px solid #000',
    borderRadius: '4px',
    padding: '20px',
    marginBottom: '15px',
  },
  title: {
    marginTop: 0,
    color: 'purple',
  },
};

const Todo = ({ item, onDelete, onComplete }) => {
  const { title, id, description, status = 'created' } = item;

  return (
    <div style={todoStyles.todoItem}>
      <Label type={status} />
      <h2 style={todoStyles.title}>{title}</h2>
      <p>{description}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
      <button onClick={() => onComplete(id)}>Complete</button>
    </div>
  );
};

const TodoList = ({ items, onComplete, onDelete }) => (
  <TransitionGroup>
    {items.map((todo) => (
      <CSSTransition key={todo.id} timeout={400} classNames={styles}>
        <Todo item={todo} onComplete={onComplete} onDelete={onDelete} />
      </CSSTransition>
    ))}
  </TransitionGroup>
);

TodoList.propTypes = {
  items: PropTypes.array,
};

export default TodoList;
