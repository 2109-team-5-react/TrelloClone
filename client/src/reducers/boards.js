export default function boards(state = [], action) {
  switch (action.type) {
    case "BOARD_FETCHED": {
      const board = { ...action.board };
      delete board.lists
      return [board];
    }
    case "FETCH_BOARDS_SUCCESS": {
      const boards = action.boards.map((b) => {
        const board = { ...b };
        delete board.lists;
        return board;
      });
      return boards;
    }
    case "CREATE_BOARD_SUCCESS": {
      const newBoard = action.board;
      return state.concat(newBoard);
    }
    default:
      return state;
  }
}
