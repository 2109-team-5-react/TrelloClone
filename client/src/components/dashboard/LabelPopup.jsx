import React, {useState} from 'react'
import { useDispatch} from 'react-redux'
import { updateCard } from "../../actions/CardActions"

const LabelPopup = ({card, handleCloseLabel}) => {
  const [labels, setLabels] = useState(card.labels)
  const dispatch = useDispatch()
  const includesLabelColor = (labels, color) => {
    return labels.includes(color)
  }

  const pickLabel = (e) => {
    const colors = ['green', 'yellow', 'orange', 'red', 'purple', 'blue']
    let index = parseInt(e.target.getAttribute('data-id'), 10) - 1
    let color = colors[index]
    let newLabels
    if (includesLabelColor(labels, color)) {
      newLabels = labels.filter((l) => l !== color)
    } else {
      newLabels = labels.concat(color)
    }
    const updatedCard = {
      'card': {
        'labels': newLabels
      }
    }
    setLabels(newLabels)
    dispatch(updateCard(card._id, updatedCard))
  }

  return (
    <div>
      <div id="add-options-labels-dropdown">
        <header>
          <span>Labels</span>
          <a href="#" className="icon-sm icon-close" onClick={handleCloseLabel}></a>
        </header>
        <div className="content">
          <input
            className="dropdown-input"
            placeholder="Search labels..."
            type="text"
          />
          <div className="labels-search-results">
            <ul className="label-list">
              <li>
                <div className="green colorblindable" data-id="1" onClick={pickLabel}>
                  {includesLabelColor(labels, 'green') && <i className="check-icon sm-icon"></i>}
                </div>
                <div className="label-background green"></div>
                <div className="label-background-overlay"></div>
                <i className="edit-icon icon not-implemented"></i>
              </li>
              <li>
                <div className="yellow colorblindable" data-id="2" onClick={pickLabel}>
                {includesLabelColor(labels, 'yellow') && <i className="check-icon sm-icon"></i>}
                </div>
                <div className="label-background yellow"></div>
                <div className="label-background-overlay"></div>
                <i className="edit-icon icon not-implemented"></i>
              </li>
              <li>
                <div className="orange colorblindable" data-id="3" onClick={pickLabel}>
                {includesLabelColor(labels, 'orange') && <i className="check-icon sm-icon"></i>}
                </div>
                <div className="label-background orange"></div>
                <div className="label-background-overlay"></div>
                <i className="edit-icon icon not-implemented"></i>
              </li>
              <li>
                <div className="red colorblindable" data-id="4" onClick={pickLabel}>
                {includesLabelColor(labels, 'red') && <i className="check-icon sm-icon"></i>}
                </div>
                <div className="label-background red"></div>
                <div className="label-background-overlay"></div>
                <i className="edit-icon icon not-implemented"></i>
              </li>
              <li>
                <div className="purple colorblindable" data-id="5" onClick={pickLabel}>
                {includesLabelColor(labels, 'purple') && <i className="check-icon sm-icon"></i>}
                </div>
                <div className="label-background purple"></div>
                <div className="label-background-overlay"></div>
                <i className="edit-icon icon not-implemented"></i>
              </li>
              <li>
                <div className="blue colorblindable" data-id="6" onClick={pickLabel}>
                {includesLabelColor(labels, 'blue') && <i className="check-icon sm-icon"></i>}
                </div>
                <div className="label-background blue"></div>
                <div className="label-background-overlay"></div>
                <i className="edit-icon icon not-implemented"></i>
              </li>
            </ul>
            <ul className="light-list">
              <li className="not-implemented">Create a new label</li>
              <hr />
              <li className="toggleColorblind">
                Enable color blind friendly mode.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LabelPopup