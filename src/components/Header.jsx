import React from "react";

const Header = () => {
  const headerStyle = {
    textAlign: "center",
    background: "#192A56",
    color: "#f5f5f5",
    textTransform: "uppercase",
    padding: "20px",
    marginBottom: "20px"
  };

  return (
    <header style={headerStyle}>
      <h1>Songs Details Using React-Redux</h1>
    </header>
  );
};

export default Header;
