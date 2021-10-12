import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { fetchBoards, fetchBoard } from "../../actions/BoardActions";
import ExistingLists from "./ExistingLists";
import { useSelector } from "react-redux";
import { createList } from "../../actions/ListActions";

const Board = () => {
  const [showListForm, setListShowForm] = useState(false);
  const [listTitle, setListTitle] = useState("");

  const cards = useSelector(s => s.cards)
  let id = useParams().id
  let resource = window.location.pathname.split('/')[1]
  if (resource !== 'boards') {
    const card = cards.filter(c => c._id === id)[0]
    id = card ? card.boardId : null;
  }

  const dispatch = useDispatch();

  const board = useSelector((state) => {
    return state.boards.filter((b) => {
      return id === b._id.toString();
    })[0];
  });

  useEffect(() => {
    if (!board) dispatch(fetchBoards())
    dispatch(fetchBoard(id));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, id]);

  const handleShowListForm = () => {
    setListShowForm(true);
  };

  const handleSubmitListForm = () => {
    if (listTitle === "") return;
    const newList = {
      boardId: id,
      list: {
        title: listTitle,
      },
    };

    dispatch(createList(newList));
    setListTitle("");
    setListShowForm(false);
  };

  const handleCancelForm = () => {
    setListShowForm(false);
    setListTitle("");
  };

  if (board) {
    return (
      <>
        <header>
          <ul>
            <li id="title">{board.title}</li>
            <li className="star-icon icon"></li>
            <li className="private private-icon icon">Private</li>
          </ul>
          <div className="menu">
            <i className="more-icon sm-icon"></i>Show Menu
          </div>
          <div className="subscribed">
            <i className="sub-icon sm-icon"></i>Subscribed
          </div>
        </header>
        <main>
          <div id="list-container" className="list-container">
            <ExistingLists />
            <div
              id="new-list"
              className={`new-list ${showListForm ? "selected" : ""}`}
            >
              <span onClick={handleShowListForm}>Add a list...</span>
              <input
                type="text"
                placeholder="Add a list..."
                value={listTitle}
                onChange={(e) => setListTitle(e.target.value)}
              />
              <div>
                <input
                  type="submit"
                  className="button"
                  value="Save"
                  onClick={handleSubmitListForm}
                />
                <i className="x-icon icon" onClick={handleCancelForm}></i>
              </div>
            </div>
          </div>
        </main>
        <div className="menu-sidebar">
          <div id="menu-main" className="main slide">
            <i className="back-icon icon"></i>
            <i className="x-icon icon"></i>
            <h1>Menu</h1>
            <div className="menu-contents">
              <div className="members">
                <div className="member-container">
                  <div className="card-member ">VR</div>
                </div>
                <div className="member-container">
                  <div className="card-member admin">TP</div>
                </div>
                <div className="member-container">
                  <div className="card-member ">KW</div>
                </div>
              </div>
              <div className="add-members">
                <i className="add-icon sm-icon"></i>Add Members...
              </div>
              <hr />
              <ul className="menu-list">
                <li className="background-item">Change Background</li>
                <li className="filter-icon menu-icon">Filter Cards</li>
                <li className="power-icon menu-icon not-implemented">
                  Power-Ups
                </li>
                <li className="stickers-icon menu-icon not-implemented">
                  Stickers
                </li>
                <li className="more-icon menu-icon">More</li>
                <hr />
                <li className="activity-icon menu-icon not-implemented">
                  Activity
                </li>
              </ul>
              <ul className="activity-list">
                <li>
                  <i className="member-icon"></i>
                  <p>
                    <span className="member-name">Taylor Peat</span> changed the
                    background of this board <small>yesterday at 4:53 PM</small>
                  </p>
                </li>
                <li>
                  <i className="member-icon"></i>
                  <p>
                    <span className="member-name">Taylor Peat</span> sent{" "}
                    <span className="link">
                      Use the + in the top menu to make your first board now.
                    </span>{" "}
                    to the board <small>4 hours ago</small>
                  </p>
                </li>
                <li>
                  <i className="member-icon"></i>
                  <p>
                    <span className="member-name">Taylor Peat</span> archived{" "}
                    <span className="link">
                      Use the + in the top menu to make your first board now.
                    </span>{" "}
                    <small>4 hours ago</small>
                  </p>
                </li>
                <li>
                  <i className="member-icon"></i>
                  <p>
                    <span className="member-name">Taylor Peat</span> changed the
                    background of this board <small>5 hours ago</small>
                  </p>
                </li>
                <li>
                  <i className="member-icon"></i>
                  <p>
                    <span className="member-name">Taylor Peat</span> changed the
                    background of this board <small>6 hours ago</small>
                  </p>
                </li>
                <li>
                  <i className="member-icon"></i>
                  <p>
                    <span className="member-name">Taylor Peat</span> changed the
                    background of this board{" "}
                    <small>yesterday at 10:23 PM</small>
                  </p>
                </li>
              </ul>
              <a className="all-activity not-implemented">
                View all activity...
              </a>
            </div>
          </div>
        </div>
        <div id="modal-container"></div>
        <div id="dropdown-container"></div>
      </>
    );
  } else return null;
};

export default Board;
