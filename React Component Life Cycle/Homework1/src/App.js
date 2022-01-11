import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const loadData = async () => {
        try {
            const data = await axios
                .get("https://todo.showkhun.co/lists")
                .then((res) => {
                    console.log(res.data.lists);
                    setData(res.data.lists);
                });
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="box">
            {data ? (
                data.map((todo) => (
                    <ul key={todo.id}>
                        <h4>todo #{todo.id}</h4>
                        <li>todo: {todo.todo}</li>
                        <li>detail: {todo.detail}</li>
                        <li>status: {todo.status}</li>
                    </ul>
                ))
            ) : (
                <Spinner animation="border" />
            )}
        </div>
    );
}

export default App;
