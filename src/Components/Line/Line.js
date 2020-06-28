import React from "react";
import Square from "../Square";

const Line = ({ checkFinish, mazeArray, ind }) => {
  return mazeArray.map((el, i) => (
    <Square checkFinish={checkFinish} value={el} x={i} y={ind} />
  ));
};

export default Line;
