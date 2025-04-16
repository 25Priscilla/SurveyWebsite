import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>My Survey Website</h1>
      <nav>
        <ul style={styles.navList}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li> {/* Ensure this links to the contact page */}
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    background: '#333',
    color: '#fff',
    padding: '15px',
    textAlign: 'center',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    padding: 0,
  },
};

export default Header;
