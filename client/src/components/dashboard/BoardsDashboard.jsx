import React, { useEffect, useState } from "react";
import BoardTile from "./BoardTile";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../actions/BoardActions";
import CreateBoardTile from "./CreateBoardTile";
// import {useRouteMatch} from "react-router-dom";

const BoardsDashboard = (props) => {
  const boards = useSelector((state) => state.boards);
  const [activeBoardId, setActiveBoardId] = useState(null)
  console.log(activeBoardId)
  const boardTiles = boards.map((board) => {
    return <BoardTile key={board._id} title={board.title} id={board._id} setActiveBoardId={setActiveBoardId} />;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchBoards());
  }, [dispatch]);

  return (
    <main className="dashboard">
      <section className="board-group">
        <header>
          <div className="board-section-logo">
            <span className="person-logo"></span>
          </div>
          <h2>Personal Boards</h2>
        </header>

        <ul className="dashboard-board-tiles">
          {boardTiles}
          <CreateBoardTile onClick={props.onNewBoardClick} />
        </ul>
      </section>
    </main>
  );
};

export default BoardsDashboard;
