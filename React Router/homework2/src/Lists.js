import React, { useEffect, useState } from 'react'
import MyNavbar from './Navbar'

function Lists() {

    const [todoLists, setTodoLists] = useState();

    useEffect(() => {
        fetch("https://todo.showkhun.co/lists")
          .then(res => res.json())
          .then(
            (result) => {
                setTodoLists(result.lists);
            })
      }, []);

    return (
        <>
            <MyNavbar />
            <div className='centerList'>
            <h1>Todo Lists</h1>
                {todoLists && todoLists.map(todo => {
                    return (
                        <ul>
                            <h5>{todo.todo}</h5>
                            <li>{todo.detail}</li>
                        </ul>
                    )
                })}     
            </div> 
        </>
    )
}

export default Lists
