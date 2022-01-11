import React, { useEffect, useState, Component } from "react";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
    state = {
        lists: [],
        loading: true,
        show: false,
        detail: "",
        todo: "",
    };

    handleCloseDetail = () => {
        this.setState({
            show: false,
        });
        alert(this.state.todo);
    };

    handleOpenDetail = (list) => {
        this.setState({
            show: true,
            todo: list.todo,
            detail: list.detail,
        });
    };

    async componentDidMount() {
        const data = await axios
            .get("https://todo.showkhun.co/lists")
            .then((res) => {
                this.setState({
                    lists: res.data.lists,
                    loading: false,
                });
            });
    }

    render() {
        return (
            <div className="App">
                <h1>Hello TODOLIST</h1>
                {this.state.loading ? (
                    <Spinner animation="border" />
                ) : (
                    <ul>
                        {this.state.lists.map((list) => (
                            <li key={list.id}>
                                <a
                                    onClick={() => this.handleOpenDetail(list)}
                                    href="#"
                                >
                                    {list.todo}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
                {this.state.show && (
                    <Detail
                        todo={this.state.todo}
                        detail={this.state.detail}
                        show={this.state.show}
                        loading={this.state.loading}
                        onClose={this.handleCloseDetail}
                    />
                )}
            </div>
        );
    }
}

export class Detail extends Component {
    render() {
        return (
            <div
                style={{
                    background: "#eee",
                    zIndex: 999,
                    width: "60%",
                    margin: "0 auto",
                    textAlign: "left",
                    height: 400,
                    display: "block",
                    padding: 10,
                    position: "relative",
                }}
            >
                <button
                    style={{
                        position: "absolute",
                        top: 10,
                        left: "auto",
                        right: 10,
                    }}
                    onClick={this.props.onClose}
                >
                    x
                </button>
                <strong>Detail</strong>

                <p>Todo : {this.props.todo}</p>
                <p>Detail : {this.props.detail}</p>
            </div>
        );
    }
}
