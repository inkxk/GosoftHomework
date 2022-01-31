import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../actions";

const TodoItem = (props) => (
  <li>
    <div className="view">
      <label>{props.todo.text}</label>
      <button
        className="destroy"
        onClick={() => props.deleteTodo(props.todo.id)}
      />
    </div>
  </li>
);

TodoItem.defaultProps = {
  deleteTodo: () => alert("Give me some function!")
};

TodoItem.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string
  }).isRequired
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

// TODO: connect to Redux store for dispatch action
export default connect(mapStateToProps, actions)(TodoItem);
