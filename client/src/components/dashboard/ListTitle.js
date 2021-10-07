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
    console.log(list);
    if (inputListTitle === "") {
      setInputListTitle(list.title);
      return;
    }
    dispatch(
      updateList({ title: inputListTitle, position: list.position }, list._id)
    );
    setShowEditListTitle(false);
    console.log("submitted");
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      if (inputListTitle === "") {
        setInputListTitle(list.title);
        setShowEditListTitle(false);
      } else {
        handleSubmit();
      }
    }
  };

  if (showEditListTitle) {
    return (
      <input
        type='text'
        onChange={handleTitleChange}
        className='list-title'
        value={inputListTitle}
        onBlur={handleSubmit}
        onKeyUp={handleEnterPress}
      />
    );
  } else {
    return (
      <p className='list-title' onClick={handleEditTitle}>
        {inputListTitle}
      </p>
    );
  }
};

export default ListTitle;
