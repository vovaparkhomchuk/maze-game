import { rand, createArray, chooseDirections } from "./AppMethods.js";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import Arrows from "./Components/Arrows";
import Line from "./Components/Line";
import {
  setMaze as mazeAction,
  setDirections as arrowsAction,
  setFinish as finishAction,
  setWin as winAction,
  setInitial as initialAction,
} from "./reducers/mazeReducer.js";

function App() {
  const appState = useSelector((state) => state);
  const dispatch = useDispatch();
  const [start, setStart] = useState(true);
  const [mazeLen, setMazeLen] = useState(3);

  const styles = {
    mainContainer: {
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      backgroundColor: "#ff40ff",
      height: "100vh",
    },
    maze: {
      justifyContent: "center",
      alignItems: "center",
      width: mazeLen * 70,
    },
    playBtn: {
      borderRadius: "6px",
      background: "linear-gradient(145deg, #e63ae6, #ff44ff)",
      boxShadow: "5px 5px 10px #d936d9 -5px -5px 10px #ff4aff",
      padding: "15px 0px",
      fontSize: 22,
      color: "white",
      fontFamily: "SF Pro Rounded",
      fontWeight: "600",
      marginTop: 20,
      cursor: "pointer",
      width: 226,
    },
    mainText: {
      color: "white",
      fontFamily: "SF Pro Rounded",
      fontSize: 48,
      fontWeight: "bold",
      width: 226,
    },
    winContainer: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0,0.2)",
      flexDirection: "column",
      width: "100%",
      height: "100vh",
      position: "absolute",
      alignItems: "center",
      backdropFilter: "blur(4px)",
    },
    instructions: {
      fontSize: 22,
      fontWeight: 600,
      fontFamily: "SF Pro Rounded",
    },
  };

  const StartScreen = () => {
    return (
      <>
        <span style={styles.mainText}>Let's play!</span>
        <span style={styles.playBtn} onClick={() => setStart(false)}>
          START
        </span>
      </>
    );
  };

  const WinScreen = () => {
    return (
      <div style={styles.winContainer}>
        <span style={styles.mainText}>You win!</span>
        <div style={styles.playBtn} onClick={newGame}>
          New Game
        </div>
      </div>
    );
  };

  const Instructions = () => {
    return (
      <>
        <span style={styles.instructions}>🌀 - is your start point.</span>
        <span style={styles.instructions}>Find your way out. Good luck!</span>
      </>
    );
  };

  const checkFinish = (x, y) => {
    if (appState.finish.x === x && appState.finish.y === y) {
      dispatch(winAction());
      return true;
    }
  };

  const newGame = () => {
    dispatch(initialAction());
    setStart(true);
    mazeArrStart();
  };

  const mazeArrStart = () => {
    const arr = createArray(mazeLen);
    const [x, y] = rand(mazeLen);
    const lastPos = { x, y };
    const dirs = chooseDirections(lastPos, mazeLen);

    arr[y][x] = 1;
    dispatch(mazeAction(arr));
    dispatch(arrowsAction(dirs));
    dispatch(finishAction(lastPos));
  };

  useEffect(() => {
    mazeArrStart();
  }, []);

  return (
    <div style={styles.mainContainer}>
      {start === true ? (
        <StartScreen />
      ) : (
        <>
          {appState.win ? <WinScreen /> : null}
          <Instructions />
          <div style={{ margin: "20px" }}>
            {appState.maze.map((el, i) => (
              <div key={i} style={styles.maze}>
                <Line
                  checkFinish={checkFinish}
                  mazeArray={el}
                  ind={i}
                  lastState={appState.finish}
                  winAction={winAction}
                  isWin={appState.win}
                />
              </div>
            ))}
          </div>
          <Arrows dirs={appState.arrows} />
        </>
      )}
    </div>
  );
}

export default App;
