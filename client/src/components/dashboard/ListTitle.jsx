import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateList } from "../../actions/ListActions";

const ListTitle = ({ list }) => {
  const [showEditListTitle, setShowEditListTitle] = useState(false);
  const [inputListTitle, setInputListTitle] = useState(list.title);

  const dispatch = useDispatch();

  const handleEditTitle = () => {
    setShowEditListTitle(true);
  };

  const handleTitleChange = (e) => {
    setInputListTitle(e.target.value);
  };

  const handleSubmit = () => {
    if (inputListTitle !== "") {
      dispatch(
        updateList({ title: inputListTitle, position: list.position }, list._id)
      );
    } else setInputListTitle(list.title);
    setShowEditListTitle(false);
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  if (showEditListTitle) {
    return (
      <div>
        <input
          type="text"
          onChange={handleTitleChange}
          className="list-title"
          value={inputListTitle}
          onBlur={handleSubmit}
          onKeyUp={handleEnterPress}
        />
      </div>
    );
  } else {
    return (
      <div>
        <p onClick={handleEditTitle} className="list-title">
          {inputListTitle}
        </p>
      </div>
    );
  }
};

export default ListTitle;
