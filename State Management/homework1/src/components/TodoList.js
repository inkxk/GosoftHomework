import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import * as actions from "../actions";

const TodoList = (props) => (
  <section className="main">
    <ul className="todo-list">
      {props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  </section>
);

TodoList.defaultProps = {
  todos: []
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

// TODO: connect to Redux store for todos state!
export default connect(mapStateToProps, actions)(TodoList);
