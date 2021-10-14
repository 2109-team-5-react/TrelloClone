import React from "react";
import moment from "moment";

const DueDateDisplayLabel = ({ card }) => {
  const isOverDue = new Date() < new Date(card.dueDate);

  return (
    <li className="due-date-section">
      <h3>Due Date</h3>
      <div
        id="dueDateDisplay"
        className={`${isOverDue ? "overdue" : ""} ${
          card.completed ? "completed" : ""
        }`}
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
