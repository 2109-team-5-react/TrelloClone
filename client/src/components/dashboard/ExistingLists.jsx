import React, { useState } from "react";
import { useSelector } from "react-redux";
import SingleList from "./SingleList";

function ExistingLists() {
  const [activeList, setActiveList] = useState(null);
  const lists = useSelector((state) => state.lists);

  return (
    <div id="existing-lists" className="existing-lists">
      {lists.map((l) => (
        <SingleList
          list={l}
          key={l._id}
          activeList={activeList}
          setActiveList={setActiveList}
        />
      ))}
    </div>
  );
}

export default ExistingLists;
