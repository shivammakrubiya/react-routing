import './App.css';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


function Shop() {

    useEffect(() => {
        fetchItems();
    }, [])

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://fakestoreapi.com/products');
        const items = await data.json();
        setItems(items);
    }

    return (
        <div >
            <h1>Shop Page</h1>
            {
                items.map(item => (


                    <h4 key={item.id}>
                        <Link to={`/shop/${item.id}`}>
                            {item.title}
                        </Link>
                    </h4>

                ))
            }
        </div>
    );
}

export default Shop;