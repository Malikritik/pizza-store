import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const AddNewItem = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      price: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      price: Yup.number().required('Required').positive('Must be a positive number')
    }),
    onSubmit: values => {
      axios.post('http://localhost:5000/items', values)
        .then(response => console.log(response.data))
        .catch(error => console.error('There was an error creating the item!', error));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {formik.errors.name ? <div>{formik.errors.name}</div> : null}

      <label htmlFor="price">Price</label>
      <input
        id="price"
        name="price"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.price}
      />
      {formik.errors.price ? <div>{formik.errors.price}</div> : null}

      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddNewItem;
