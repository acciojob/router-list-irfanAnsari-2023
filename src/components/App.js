
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemList from "./components/ItemList";
import ItemDetail from "./components/ItemDetail";
import './../styles/App.css';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Item List</h1>
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/items/:id" element={<ItemDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
