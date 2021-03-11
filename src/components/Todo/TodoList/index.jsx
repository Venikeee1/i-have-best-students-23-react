import React, { useRef } from 'react';
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

const TodoItemWithTransition = ({ item, onComplete, onDelete, ...rest }) => {
  const ref = useRef(null);

  return (
    <CSSTransition
      nodeRef={ref}
      timeout={400}
      unmountOnExit
      classNames={styles}
      {...rest}
    >
      <div key={item.id} ref={ref}>
        <Todo item={item} onComplete={onComplete} onDelete={onDelete} />
      </div>
    </CSSTransition>
  );
};

const TodoList = ({ items, onComplete, onDelete }) => {
  return (
    <TransitionGroup>
      {items.map((todo) => {
        return (
          <TodoItemWithTransition
            key={todo.id}
            item={todo}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        );
      })}
    </TransitionGroup>
  );
};

TodoList.propTypes = {
  items: PropTypes.array,
};

export default TodoList;
