import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCard } from "../../actions/CardActions";

const DescriptionForm = ({ card, id }) => {
  const [cardDescription, setCardDescription] = useState(card.description);
  const [showEditDescription, setShowEditDescription] = useState(false);
  const dispatch = useDispatch();

  const handleEditClick = () => {
    setShowEditDescription(!showEditDescription);
  };

  const handleDescriptionChange = (e) => {
    setCardDescription(e.target.value);
  };

  const handleCancelClick = () => {
    setCardDescription(card.description);
    handleEditClick();
  };
  const handleSubmitDescription = () => {
    let updatedCard = {
      card: {
        description: cardDescription,
      },
    };
    dispatch(updateCard(id, updatedCard));
    setShowEditDescription(false);
  };
  return (
    <form className="description">
      <p>Description</p>
      <span id="description-edit" className="link" onClick={handleEditClick}>
        Edit
      </span>
      {!showEditDescription ? (
        <p className="textarea-overlay">{cardDescription}</p>
      ) : (
        <>
          <textarea
            className="textarea-toggle"
            rows="1"
            value={cardDescription}
            autoFocus={true}
            onChange={handleDescriptionChange}
          ></textarea>
          <div>
            <div
              className="button"
              value="Save"
              onClick={handleSubmitDescription}
            >
              Save
            </div>
            <i className="x-icon icon" onClick={handleCancelClick}></i>
          </div>
        </>
      )}
      {/* <p id="description-edit-options" className={showEditDescription ? "" : "hidden"}>
        You have unsaved edits on this field.{" "}
        <span className="link">View edits</span> -{" "}
        <span className="link">Discard</span>
      </p> */}
    </form>
  );
};

export default DescriptionForm;
