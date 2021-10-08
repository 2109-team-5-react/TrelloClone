import React from "react";

const AddCardForm = ({ listId, activeList, setActiveList }) => {
  const handleShowForm = () => {
    setActiveList(listId);
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
          <textarea name="add-card"></textarea>
          <div className="members"></div>
        </div>
        <a className="button" onClick={() => console.log("clicked button")}>
          Add
        </a>
        <i className="x-icon icon"></i>
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
