import React from "react";
import Pikaday from "pikaday";
import moment from "moment";
import { updateCard } from "../../actions/CardActions";
// import { useDispatch } from "react-redux";

class DueDatePopup extends React.Component {
  componentDidMount() {
    // console.log(this.props.dueDate);
    const dateToShow = this.props.dueDate
      ? new Date(this.props.dueDate)
      : moment().add(1, "day").toDate();
    this.picker = new Pikaday({
      field: document.querySelector(".datepicker-select-date input"),
      bound: false,
      container: document.getElementById("calendar-widget"),
      firstDay: 1,
      yearRange: 10,
      // defaultDate: moment().add(2, "day").toDate(),
      defaultDate: dateToShow,
      setDefaultDate: true,
      format: "M/D/YYYY",
      i18n: {
        previousMonth: "Prev",
        nextMonth: "Next",
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        weekdays: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        weekdaysShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      },
      toString(date, format) {
        return moment(date).format(format);
      },
    });
    this.picker.show();
  }

  render() {
    // console.log(this.props.dueDate);
    const handleSubmitDate = (e) => {
      e.preventDefault();
      // console.log(this.picker.getDate());

      let updatedCard = {
        card: {
          dueDate: this.picker.getDate(),
        },
      };
      this.props.dispatch(updateCard(this.props.id, updatedCard));
      this.props.setPopover(this.props.initialPopover);
      // dispatch;
    };

    return (
      <>
        <header>
          <span>Change due date</span>
          <a href="#" className="icon-sm icon-close"></a>
        </header>
        <div className="content">
          <form>
            <div className="datepicker-select">
              <div className="datepicker-select-date">
                <label>
                  Date
                  <input type="text" placeholder="Enter date" autoFocus />
                </label>
              </div>
              <div className="datepicker-select-time">
                <label>
                  Time
                  <input
                    type="text"
                    placeholder="Enter time"
                    value="12:00 PM"
                  />
                </label>
              </div>
              <div id="calendar-widget"></div>
            </div>
            <button className="button" type="submit" onClick={handleSubmitDate}>
              Save
            </button>
            <button className="button red-button" type="reset">
              Remove
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default DueDatePopup;
