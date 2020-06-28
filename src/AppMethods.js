const directions = ["up", "right", "down", "left"];

export const rand = (len) => {
  return [Math.floor(Math.random() * len), Math.floor(Math.random() * len)];
};

export const createArray = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(new Array(len).fill(0));
  }
  return arr;
};

export const chooseDirections = (lastPosition, mazeLen) => {
  const dirs = [];

  while (dirs.length < 10) {
    const randDirNum = Math.floor(Math.random() * directions.length);
    const direction = directions[randDirNum];

    if (direction === "up") {
      if (lastPosition.y > 0) {
        lastPosition.y = lastPosition.y - 1;
        dirs.push("⬆");
      }
    }

    if (direction === "right") {
      if (lastPosition.x < mazeLen - 1) {
        lastPosition.x = lastPosition.x + 1;
        dirs.push("➡");
      }
    }

    if (direction === "down") {
      if (lastPosition.y < mazeLen - 1) {
        lastPosition.y = lastPosition.y + 1;
        dirs.push("⬇");
      }
    }

    if (direction === "left") {
      if (lastPosition.x > 0) {
        lastPosition.x = lastPosition.x - 1;
        dirs.push("⬅");
      }
    }
  }
  return dirs;
};
