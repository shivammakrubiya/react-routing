import './App.css';
import React, { useState, useEffect } from 'react'

import { useParams } from "react-router-dom";

function Item({ id }) {
    // Get ID from URL
    const params = useParams();

    useEffect(() => {
        fetchItem();
    }, [])

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const data = await fetch(`https://fakestoreapi.com/products/${params.id}`);
        const items = await data.json();
        setItem(items);
    }

    return (
        <div >
            <h1>{item.title}</h1>
            <img src={item.image} alt='' width={300} height={300} />
        </div>
    );
}

export default Item;