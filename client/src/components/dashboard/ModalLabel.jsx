import React from "react"

const ModalLabel = ({color}) => {
  return (
    <div className="member-container">
      <div className={`${color} label colorblindable`}></div>
    </div>
  )
}

export default ModalLabel