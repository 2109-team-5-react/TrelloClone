import React from "react";
import moment from "moment";
import { useDispatch} from "react-redux"
import { updateCard } from "../../actions/CardActions"

const DueDateDisplayLabel = ({ card }) => {
  const isOverDue = new Date() > new Date(card.dueDate);
  const dispatch = useDispatch()
  const handleToggleComplete = () => {
    const updatedCard = {
      "card": {
        "completed": !card.completed
      }
    }
    dispatch(updateCard(card._id, updatedCard))
  }
  return (
    <li className="due-date-section">
      <h3>Due Date</h3>
      <div
        id="dueDateDisplay"
        className={`${isOverDue ? "overdue" : ""} ${
          card.completed ? "completed" : ""
        }`}
        onClick={handleToggleComplete}
      >
        <input
          id="dueDateCheckbox"
          type="checkbox"
          className="checkbox"
          checked={card.completed}
        />
        {moment(card.dueDate).format("MMM D [at] h:mm a")}
        {isOverDue && <span>&nbsp;(past due)</span>}
      </div>
    </li>
  );
};

export default DueDateDisplayLabel;
