import React, { useState } from "react";

const Square = ({ checkFinish, value, x, y }) => {
  const [win, setWin] = useState(false);

  const styles = {
    squareStyles: {
      width: "50px",
      height: "50px",
      justifyContent: "center",
      float: "left",
      cursor: "pointer",
      margin: "10px",
      borderRadius: "6px",
      display: "flex",
      alignItems: "center",
      background:
        value === 1
          ? "linear-gradient(145deg, #ff44ff, #e63ae6)"
          : "linear-gradient(145deg, #e63ae6, #ff44ff)",
      boxShadow: "5px 5px 10px #d936d9 -5px -5px 10px #ff4aff",
      fontSize: 22,
    },
  };

  const check = (x, y) => {
    const res = checkFinish(x, y);
    if (res) setWin(true);
  };

  return (
    <span onClick={() => check(x, y)} x={x} y={y} style={styles.squareStyles}>
      {win === false ? (value === 1 ? "🌀" : null) : "✅"}
    </span>
  );
};

export default Square;
