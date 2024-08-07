import React from 'react';
import { BrowserRouter as Router, Route,  Link, BrowserRouter } from 'react-router-dom';
 import Home from './Home';
 import About from './About';
 import DisplayAllItems from './DisplayAllItems';
 import AddNewItem from './AddNewItem';
 import UpdateItem from './UpdateItem';
 import DeleteItem from './DeleteItem';
 import Contact from './Contact';

const App = () => (
    <BrowserRouter>
  <Router>
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/items">All Items</Link></li>
          <li><Link to="/add">Add New Item</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      
        <Route path="/"  element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="items" element={<DisplayAllItems/>} />
        <Route path="add" element={<AddNewItem/>} />
        <Route path="update/:id" element={<UpdateItem/>} />
        <Route path="delete/:id" element={<DeleteItem/>} />
        <Route path="contact" element={<Contact/>} />
        
      
    </div>
  </Router>
  </BrowserRouter>
);

export default App;
