import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Secret from "./components/Secret";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="page">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/secret" element={<Secret />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
