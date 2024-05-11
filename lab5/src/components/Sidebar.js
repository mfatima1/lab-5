// Sidebar.js
import React from "react";

export const Sidebar = ({
  sortBy,
  timeFrame,
  onSortByChange,
  onTimeFrameChange,
}) => {
  return (
    <div className="container">
      <div className="filter">
        <form>
          <div className="textbox">
            <label>
              <input type="textbox" placeholder="Enter a value 1-15"></input>
            </label>
            <br />
            <button className="srchbtn">Search</button>
          </div>
          <h4>Sort By:</h4>
          <label>
            <input
              type="radio"
              name="sortBy"
              value="viewed"
              checked={sortBy === "viewed"}
              onChange={onSortByChange}
            />{" "}
            Most Viewed
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="sortBy"
              value="shared"
              checked={sortBy === "shared"}
              onChange={onSortByChange}
            />{" "}
            Most Shared
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="sortBy"
              value="emailed"
              checked={sortBy === "emailed"}
              onChange={onSortByChange}
            />{" "}
            Most Emailed
          </label>
          <h4>Time Frame:</h4>
          <label>
            <input
              type="radio"
              name="timeFrame"
              value="1"
              checked={timeFrame === "1"}
              onChange={onTimeFrameChange}
            />{" "}
            Day
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="timeFrame"
              value="7"
              checked={timeFrame === "7"}
              onChange={onTimeFrameChange}
            />{" "}
            Week
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="timeFrame"
              value="30"
              checked={timeFrame === "30"}
              onChange={onTimeFrameChange}
            />{" "}
            Month
          </label>
        </form>
      </div>
    </div>
  );
};
