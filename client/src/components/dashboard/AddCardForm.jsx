import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createCard } from "../../actions/CardActions";

const AddCardForm = ({ listId, activeList, setActiveList }) => {
  const [cardTitle, setCardTitle] = useState("");
  const dispatch = useDispatch();
  const addCardRef = useRef(null);

  useEffect(() => {
    if (activeList) {
      addCardRef.current.focus();
    }
  }, [activeList]);

  const handleShowForm = () => {
    setActiveList(listId);
  };

  const handleSubmitCard = () => {
    const newCard = {
      listId,
      card: {
        title: cardTitle,
      },
    };

    dispatch(createCard(newCard));
    resetForm();
  };

  const resetForm = () => {
    setActiveList(null);
    setCardTitle("");
  };

  return (
    <>
      <div
        className={`add-dropdown add-bottom ${
          activeList === listId ? "active-card" : ""
        }`}
      >
        <div className="card">
          <div className="card-info"></div>
          <textarea
            name="add-card"
            ref={addCardRef}
            value={cardTitle}
            onChange={(e) => setCardTitle(e.target.value)}
          ></textarea>
          <div className="members"></div>
        </div>
        <a className="button" onClick={handleSubmitCard}>
          Add
        </a>
        <i className="x-icon icon" onClick={resetForm}></i>
        <div className="add-options">
          <span>...</span>
        </div>
      </div>
      <div
        className="add-card-toggle"
        data-position="bottom"
        onClick={handleShowForm}
      >
        Add a card...
      </div>
    </>
  );
};

export default AddCardForm;
