// HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import HomePage from './Components/HomePage';


export default function HomePage() {
  return (
    <div style={{ textAlign: 'center', paddingTop: '100px' }}>
      <h1>Welcome to the Survey</h1>
      <Link to="/survey">
        <button className="btn btn-primary mt-3">Start Survey</button>
      </Link>
    </div>
  );
}
