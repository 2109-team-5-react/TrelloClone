export default function comments(state = [], action) {
  switch (action.type) {
    // Changes cards to all cards for specific board
    // case "BOARD_FETCHED": {
    //   let cards = [];
    //   let comments = [];
    //   for (let i = 0; i < action.board.lists.length; i++) {
    //     for (let j = 0; j < action.board.lists[i].cards.length; j++) {
    //       let card = action.board.lists[i].cards[j];
    //       if (!card.archived) {
    //         cards.push(card);
    //       }
    //     }
    //   }
    //   cards.forEach((card) => {
    //     card.comments.forEach((comment) => comments.push(comment));
    //   });
    //   return comments;
    // }
    case "FETCH_CARD_SUCCESS": {
      return [...action.card.comments].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    }
    case "CREATE_COMMENT_SUCCESS": {
      return state
        .concat(action.comment)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
    default:
      return state;
  }
}
