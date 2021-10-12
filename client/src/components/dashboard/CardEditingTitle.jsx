import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { updateCard } from "../../actions/CardActions"

const CardEditingTitle = ({ card, id }) => {
  const [cardTitle, setCardTitle] = useState(card.title);
  const dispatch = useDispatch();

  const handleInputBlur = (e) => {
    if (e.key !== "Enter") {
      return
    }
    e.currentTarget.blur()
  }

  const handleUpdateTitle = () => {
    let updatedCard = {
      "card": {
        "title": cardTitle
      }
    }
    dispatch(updateCard(id, updatedCard))
  }
  return (
    <textarea className="list-title" style={{ height: "45px" }} onChange={(e) => setCardTitle(e.target.value)} onKeyUp={handleUpdateTitle} onBlur={handleInputBlur}>
      {cardTitle}
    </textarea>
  )
};

export default CardEditingTitle;