import React, { Component } from "react";
import PropTypes from "prop-types";
import * as actions from "../actions";
import { connect } from "react-redux";

class TodoTextInput extends Component {
  state = {
    text: ""
  };

  handleSubmit = (e) => {
    const text = e.target.value.trim();
    if (text.length <= 0) return;
    if (e.key === "Enter") {
      this.props.addTodo(text);
      this.setState({ text: "" });
    }
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={this.state.text}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}

TodoTextInput.defaultProps = {
  addTodo: () => alert("Give me some function!")
};

TodoTextInput.propTypes = {
  addTodo: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

// TODO: connect to Redux Store for dispatch action!
export default connect(mapStateToProps, actions)(TodoTextInput);
