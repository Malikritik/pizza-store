import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayAllItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/items')
      .then(response => setItems(response.data))
      .catch(error => console.error('There was an error fetching the data!', error));
  }, []);

  return (
    <div>
      <h1>All Items</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayAllItems;
