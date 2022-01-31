import React, { useState } from "react";
import axios from "axios";
import * as actions from "./action";
import { connect } from "react-redux";

function App(props) {
    const getData = async (props) => {
        const data = await axios.get("https://randomuser.me/api/");
        props.addUser(data.data.results[0]);
    };

    const handleChange = (input) => {
        if (input == 1 && props.cid < props.userList.length - 1) {
            props.changeUser(props.cid + 1);
        } else if (input == -1 && props.cid > 0) {
            props.changeUser(props.cid - 1);
        }
    };

    return (
        <div className="App">
            {props.userList.length !== 0 && (
                <>
                    <img
                        src={props.userList[props.cid].picture}
                        width="300"
                        height="300"
                    />
                    <p>email: {props.userList[props.cid].email}</p>
                    <p>gender: {props.userList[props.cid].gender}</p>
                    <p>name: {props.userList[props.cid].fullName}</p>
                </>
            )}
            <button onClick={() => handleChange(-1)}>Previous</button>
            <button onClick={() => getData(props)}>Generate User</button>
            <button onClick={() => handleChange(1)}>Next</button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    userList: state.userList,
    cid: state.cid,
});

export default connect(mapStateToProps, actions)(App);
