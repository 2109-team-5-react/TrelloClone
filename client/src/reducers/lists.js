export default function lists(state = [], action) {
  switch (action.type) {
    case "BOARD_FETCHED": {
      return action.board.lists;
    }
    default:
      return state;
  }
}