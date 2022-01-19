import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Create from "./Create";
import Lists from "./Lists";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/lists" element={<Lists />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);
