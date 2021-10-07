export default function lists(state = [], action) {
  switch (action.type) {
    case "BOARD_FETCHED": {
      const lists = action.board.lists.map(l => {
        const list = { ...l }
        delete list.cards
        return list;
      })
      return lists;
    }
    case "CREATE_LIST_SUCCESS": {
      return state.concat(action.list);
    }
    default:
      return state;
  }
}