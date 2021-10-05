export default function cards(state = [], action) {
  switch (action.type) {
    case "BOARD_FETCHED": {
      return action.board.lists[0].cards;
    }
    default:
      return state;
  }
}