import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { toggleTodo } from './actions';

const TodoList = props => (
  <ul style={{ textAlign: 'left' }}>
    {props.todos.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
        onToggle={props.toggleTodo}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
  toggleTodo: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const actionCreators = {
  toggleTodo
};

export default connect(
  mapStateToProps,
  actionCreators
)(TodoList);
