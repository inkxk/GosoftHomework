import React from 'react';
import axios from 'axios';

function App() {

  async function generateData() {
    // getData
    let promise = axios.get('https://randomuser.me/api/');
    let data = await promise
    // console.log(data.data.results[0]);

    // sortData
    const genderData = data.data.results[0].gender;
    const emailData = data.data.results[0].email;
    const nameData = data.data.results[0].name;
    const imgData = data.data.results[0].picture.large;

    // placeDataInWebsite
    const email = document.getElementById('email');
    const gender = document.getElementById('gender');
    const name = document.getElementById('name');
    const img = document.getElementById('img');

    email.innerHTML = `Email: ${emailData}`;
    gender.innerHTML = `Gender: ${genderData}`;
    name.innerHTML = `Name: ${nameData.title} ${nameData.first} ${nameData.last}`;
    img.src = imgData;
  }

  return (
    <div>
      <img src="" id='img'></img>
      <p id='email'></p>
      <p id='gender'></p>
      <p id='name'></p>
      <button type="button" onClick={generateData}>Generate User</button>
    </div>
  );
}

export default App;
