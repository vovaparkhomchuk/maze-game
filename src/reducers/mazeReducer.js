const initialState = {
  maze: [],
  arrows: [],
  finish: {},
};

const SET_MAZE = `SET_MAZE`;
const SET_ARROWS = `SET_ARROWS`;
const SET_FINISH = `SET_FINISH`;
const SET_INITIAL = `SET_INITIAL`;
const SET_WIN = `SET_WIN`;

export const setMaze = (arr) => ({ type: SET_MAZE, arr });
export const setDirections = (arr) => ({ type: SET_ARROWS, arr });
export const setFinish = (coordinates) => ({ type: SET_FINISH, coordinates });
export const setWin = () => ({ type: SET_WIN });
export const setInitial = () => ({ type: SET_INITIAL });

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_MAZE:
      return {
        ...state,
        maze: action.arr,
      };
    case SET_ARROWS:
      return {
        ...state,
        arrows: action.arr,
      };
    case SET_FINISH:
      return {
        ...state,
        finish: action.coordinates,
      };
    case SET_WIN:
      return {
        ...state,
        win: true,
      };
    case SET_INITIAL:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
