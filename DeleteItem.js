import React from 'react';
import axios from 'axios';

const DeleteItem = ({ match }) => {
  const { id } = match.params;

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/items/${id}`)
      .then(response => console.log(response.data))
      .catch(error => console.error('There was an error deleting the item!', error));
  };

  return (
    <div>
      <h1>Delete Item</h1>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteItem;
