import React, { useState } from "react";
import axios from "axios";
import queryString from "query-string";
import "../App.css";

const Login = () => {
    const initialState = {
        username: "",
        password: "",
    };

    const [input, setInput] = useState(initialState);

    function handleChange(e) {
        switch (e.target.id) {
            case "username":
                setInput({ ...input, username: e.target.value });
                break;
            case "password":
                setInput({ ...input, password: e.target.value });
                break;
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        const details = {
            username: input.username,
            password: input.password,
        };
        setInput(initialState);
        try {
            axios
                .post(
                    "http://localhost:3001/login",
                    queryString.stringify(details),
                    {
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                    }
                )
                .then((response) => {
                    if (response.status == 200) {
                        localStorage.setItem("token", response.data.token);
                        window.location = "/secret";
                        return alert("Login Completed!");
                    }
                    if (response.status == 201) {
                        alert("Wrong Password!");
                    } else {
                        alert("User not found!");
                    }
                });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <section class="vh-90">
            <div class="container-fluid h-custom">
                <div class="row d-flex justify-content-center align-items-center h-100 mt-5">
                    <div class="col-md-9 col-lg-6 col-xl-5">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            class="img-fluid"
                            alt="Sample image"
                        />
                    </div>
                    <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1 mt-5">
                        <form>
                            <div class="form-outline mb-3">
                                <p class="form-label text-start">Username</p>
                                <input
                                    type="text"
                                    id="username"
                                    class="form-control form-control-lg"
                                    placeholder="Enter username"
                                    value={input.username}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                />
                            </div>

                            <div class="form-outline mb-3">
                                <p class="form-label text-start">Password</p>
                                <input
                                    type="password"
                                    id="password"
                                    class="form-control form-control-lg"
                                    placeholder="Enter password"
                                    value={input.password}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                />
                            </div>

                            <div class="text-center text-lg-start mt-3 pt-2">
                                <button
                                    type="button"
                                    class="btn btn-primary btn-lg"
                                    style={{
                                        paddingLeft: "2.5rem",
                                        paddingRight: "2.5rem",
                                    }}
                                    onClick={handleSubmit}
                                >
                                    Login
                                </button>
                                <p class="small fw-bold mt-5 pt-1 mb-0">
                                    Don't have an account?{" "}
                                    <a href="/register" class="link-danger">
                                        Register
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
