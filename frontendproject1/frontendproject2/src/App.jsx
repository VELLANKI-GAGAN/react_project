import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';  // Make sure this file has your card CSS styles

export default function App() {
  return (
    <>
      <h1>Welcome to FRONTEND class in KLU</h1>
      <h2>Today's topic is Introduction to React</h2>
      <h3>Today's Date is 29.07.2025</h3>
      <h3>2400030198-GAGAN</h3>

      <div id="section" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', padding: '10px' }}>
        <Link to="/Page1" className="card">
          <img src="images/page1.png" alt="Page 1" />
          <label>Page 1</label>

        </Link>

        <Link to="/Page2" className="card">
          <img src="images/page2.png" alt="Page 2" />
          <label>Page 2</label>
        </Link>

        <Link to="/Page3" className="card">
          <img src="images/page3.png" alt="Page 3" />
          <label>Page 3</label>
        </Link>

        <Link to="/Page4" className="card">
          <img src="images/page4.png" alt="Page 4" />
          <label>Page 4 </label>
        </Link>

        <Link to="/Page5" className="card">
          <img src="images/page5.png" alt="Page 5" />
          <label>Page 5</label>
        </Link>

        <Link to="/Page6" className="card">
          <img src="images/page6.png" alt="Page 6" />
          <label>Page 6</label>
        </Link>
      </div>
    </>
  );
}
