import React, { useEffect } from "react";
import axios from "axios";
import queryString from "query-string";

const Secret = () => {
    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("token");
            axios
                // void 0 เพื่อให้ body ว่าง
                // ไม่งั้นมันจะเห็น headers เป็น body
                .post("http://localhost:3001/authen", void 0, {  
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((response) => {
                    if (response.status == 200) {
                        return alert("Authen Completed!");
                    } else {
                        console.log(response);
                        alert("Authen Failed");
                        return (window.location = "/");
                    }
                })
                .catch((err) => console.error(err));
        };

        fetchData();
    }, []);

    return (
        <div
            className="container-fluid vh-90 d-flex justify-content-center align-items-center text-center"
            style={{ marginTop: "40vh", fontSize: "72px" }}
        >
            Secret
        </div>
    );
};

export default Secret;
