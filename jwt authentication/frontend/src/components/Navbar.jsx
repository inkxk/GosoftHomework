import React from "react";

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    Login / Register
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    {/* เพิ่ม ms-auto มันจะไปฝั่งขวาเอง */}
                    <div class="navbar-nav ms-auto"> 
                        <a class="nav-link" href="/">
                            Login
                        </a>
                        <a class="nav-link" href="/register">
                            Register
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
