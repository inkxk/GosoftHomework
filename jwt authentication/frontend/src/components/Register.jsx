import React, { useState } from "react";
import axios from "axios";
import queryString from "query-string";
import "../App.css";

const Register = () => {

    const initialState = {
        username: "",
        email: "",
        password: "",
    }

    const [input, setInput] = useState(initialState);

    function handleChange(e) {
        switch (e.target.id) {
            case "username":
                setInput({ ...input, username: e.target.value });
                break;
            case "email":
                setInput({ ...input, email: e.target.value });
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
            email: input.email,
            password: input.password,
        };
        setInput(initialState);
        try {
            axios
                .post(
                    "http://localhost:3001/register",
                    queryString.stringify(details),
                    {
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                    }
                )
                .then((response) => {
                    if (response.status == 200) {
                        alert("Register Completed!");
                    } else {
                        alert("User is exist!")
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
                                <p class="form-label text-start">
                                    Email address
                                </p>
                                <input
                                    type="text"
                                    id="email"
                                    class="form-control form-control-lg"
                                    placeholder="Enter email"
                                    value={input.email}
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
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
