export default function cards(state = [], action) {
  switch (action.type) {
    // Changes cards to all cards for specific board
    case "BOARD_FETCHED": {
      let cards = [];
      for (let i = 0; i < action.board.lists.length; i++) {
        for (let j = 0; j < action.board.lists[i].cards.length; j++) {
          let card = action.board.lists[i].cards[j];
          if (!card.archived) {
            cards.push(card);
          }
        }
      }
      return cards;
    }
    case "CREATE_CARD_SUCCESS": {
      return state.concat(action.card);
    }
    case "UPDATE_CARD_SUCCESS": {
      return state
        .map((c) => {
          if (action.card._id === c._id) {
            return action.card;
          }
        })
        .filter((card) => !card.archived);
    }
    case "FETCH_CARD_SUCCESS": {
      let cards = state.filter((card) => {
        return card._id !== action.card._id;
      });
      return cards.concat(action.card);
    }
    default:
      return state;
  }
}
