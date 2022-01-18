import React, { useState } from "react";
import MyNavbar from "./Navbar";
import { Form, Button } from "react-bootstrap";
import './style.css';

function Create() {

    const [todoLists, addTodoLists] = useState([]);
    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodoLists([...todoLists, userInput]);
        setUserInput("");
    }


    return (
        <>
            <MyNavbar />
            <div className="centerList">
                <div>
                    <h1>Todo Lists</h1>
                    <ul>
                        {todoLists.map((todo, index) => {
                            return (
                                <li key={index}>{todo}</li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <Form>
                        <Form.Group className="mb-3 w-25">
                            <Form.Control type="text" placeholder="Enter Todo" value={userInput} onChange={handleChange} />
                        </Form.Group>
                        <Button variant="primary" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default Create;
