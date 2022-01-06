import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Users(){
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get(`http://13.59.56.118:9090/jpa/users`).then(res => {
          const user = res.data;
          console.log(user)
            setUser(user);
        });
      }, []);

    return (
        <>
        <h2>Users</h2>
        <ul>
        {user.map(u => (
          <li key={u.id}>
            {u.name}, {u.birthDate},{" "} 
            <ol>
            {u.posts.map(
                p=>(
                    <li key={p.id}>{p.description}</li>
                )
            )}
    </ol>
          </li>
        ))}
        </ul>
        </>
    )
}