export default function cards(state = [], action) {
  switch (action.type) {
    // Changes cards to all cards for specific board
    case "BOARD_FETCHED": {
      let cards = [];
      for (let i = 0; i < action.board.lists.length; i++) {
        for (let j = 0; j < action.board.lists[i].cards.length; j++) {
          cards.push(action.board.lists[i].cards[j]);
        }
      }
      return cards;
    }
    case "CREATE_CARD_SUCCESS": {
      return state.concat(action.card);
    }
    case "UPDATE_CARD_SUCCESS": {
      return state.map((c) => {
        if (action.card._id === c._id) {
          return action.card
        }
      })
    }
    default:
      return state;
  }
}
