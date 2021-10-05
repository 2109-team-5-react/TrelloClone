import React from 'react'
import { useSelector } from 'react-redux'
import SingleList from './SingleList'

function ExistingLists() {
  const lists = useSelector((state) => state.lists)
  console.log(lists)
  console.log(":) :)")
  return (
    <div id="existing-lists" className="existing-lists">
      {lists.map((l) => <SingleList list={l} key={l._id} /> )}        
    </div>
  )
}

export default ExistingLists
