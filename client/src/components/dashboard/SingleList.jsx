import React from "react";
import SingleCard from "./SingleCard";
import AddCardForm from "./AddCardForm";
import { useSelector } from "react-redux";
import ListTitle from "./ListTitle";

function SingleList({ list, activeList, setActiveList }) {
  const cards = useSelector((state) => state.cards);

  return (
    <div
      className={`list-wrapper ${
        activeList === list._id ? "add-dropdown-active" : ""
      }`}
    >
      <div className="list-background">
        <div className="list">
          <a className="more-icon sm-icon" href=""></a>
          <ListTitle list={list} />
          <div className="add-dropdown add-top">
            <div className="card"></div>
            <a className="button">Add</a>
            <i className="x-icon icon"></i>
            <div className="add-options">
              <span>...</span>
            </div>
          </div>
          <div id="cards-container" data-id="list-1-cards">
            {cards.map((c) => (
              <SingleCard key={c._id} card={c} />
            ))}
          </div>
          <AddCardForm
            listId={list._id}
            // showNewCardForm={showNewCardForm}
            activeList={activeList}
            setActiveList={setActiveList}
            // setShowNewCardForm={setShowNewCardForm}
          />
        </div>
      </div>
    </div>
  );
}

export default SingleList;
