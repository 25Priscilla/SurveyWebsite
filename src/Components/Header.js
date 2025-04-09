import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>My Website</h1>
      <nav>
        <ul style={styles.navList}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    background: "#333",
    color: "#fff",
    padding: "15px",
    textAlign: "center"
  },
  navList: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    padding: 0
  }
};

export default Header;
