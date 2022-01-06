import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Photos(){

    const [photo, setPhoto] = useState([]);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos`).then(res => {
          const photo = res.data;
          setPhoto(photo);
        });
      }, []);

    return (
        <>
        <h2>Photos</h2>
        <ul>
        {photo.map(p => (
          <li key={p.id}>
            {p.title}, {p.url},{" "}
            <img src={p.url} alt={p.title} />
          </li>
        ))}
      </ul>
        </>
    )
}