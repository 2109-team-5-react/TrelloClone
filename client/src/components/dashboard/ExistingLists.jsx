import React, { useState } from "react";
import { useSelector } from "react-redux";
import SingleList from "./SingleList";

function ExistingLists({setShowModal, setModalCard}) {
  const [activeList, setActiveList] = useState(null);
  const lists = useSelector((state) => state.lists);
  console.log(lists, "HEREEEEEEEEE")
  return (
    <div id="existing-lists" className="existing-lists">
      {lists.map((l) => (
        <SingleList
          list={l}
          key={l._id}
          activeList={activeList}
          setActiveList={setActiveList}
          setShowModal={setShowModal}
          setModalCard={setModalCard}
        />
      ))}
    </div>
  );
}

export default ExistingLists;
