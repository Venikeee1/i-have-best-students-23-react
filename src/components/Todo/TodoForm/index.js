import PropTypes from 'prop-types';
import styles from './TodoForm.module.css';
import React, { Component } from 'react';
import { v4 as uuidv } from 'uuid';

class TodoForm extends Component {
  state = {
    title: '',
    description: '',
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState(() => ({
      [name]: value,
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit({ ...this.state, id: uuidv() });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          name="title"
          onChange={this.handleChange}
          placeholder="Title"
        />
        <input
          className={styles.input}
          name="description"
          onChange={this.handleChange}
          placeholder="Description"
        />
        <button className={styles.submit} type="submit">
          Submit
        </button>
      </form>
    );
  }
}

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default TodoForm;
