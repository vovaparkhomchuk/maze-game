import React from "react";

const Arrows = ({ dirs }) => {
  const styles = {
    arrowsContainer: {
      margin: "10px",
      width: "350px",
    },
    arrowsStyles: {
      color: "white",
      margin: "10px",
      justifyContent: "center",
      float: "left",
      borderRadius: "6px",
      background: "linear-gradient(145deg, #e63ae6, #ff44ff)",
      boxShadow: "5px 5px 10px #d936d9 -5px -5px 10px #ff4aff",
      width: "50px",
      height: "50px",
      display: "flex",
      alignItems: "center",
      fontSize: 22,
    },
  };

  return (
    <div style={styles.arrowsContainer}>
      {dirs.map((dir) => (
        <span style={styles.arrowsStyles}>{dir}</span>
      ))}
    </div>
  );
};

export default Arrows;
