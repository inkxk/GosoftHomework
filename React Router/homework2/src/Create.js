import React, { useState } from "react";
import MyNavbar from "./Navbar";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import "./style.css";

function Create() {

    const [todoInput, setTodoInput] = useState("");
    const [detailInput, setDetailInput] = useState("");

    const handleTodoChange = (e) => {
        setTodoInput(e.currentTarget.value);
    }

    const handleDetailChange = (e) => {
        setDetailInput(e.currentTarget.value);
    }

    const navigate = useNavigate();

    const createData = async (todo, detail) => {
        try {
            const res = await fetch("https://todo.showkhun.co/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    todo,
                    detail
                })
            });

            if (res.ok) {
                navigate('/lists')
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <MyNavbar />
            <div className="centerList">
                <h1>Create Todo Lists</h1>
                <label>Todo: </label><br />
                <input type="text" id="todo" value={todoInput} onChange={handleTodoChange}></input>
                <br />
                <label>Detail: </label><br />
                <textarea id="detail" rows="5" cols="33" value={detailInput} onChange={handleDetailChange}></textarea>
                <br />
                <button onClick={() => createData(todoInput, detailInput)}>Add Todo</button>
            </div>
        </>
    );
}

export default Create;
