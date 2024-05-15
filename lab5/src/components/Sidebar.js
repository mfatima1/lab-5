import React, { useState } from "react";
export const Sidebar = ({
  sortBy,
  timeFrame,
  onSortByChange,
  onTimeFrameChange,
  setSearchValue,
  searchValue,
  setShowSearchValue,
}) => {
  const [currentSearch, setCurrentSearch] = useState("");
  const handleSearch = (event) => {
    event.preventDefault();
    try {
      const parsedSearch = parseInt(currentSearch, 10);
      if (
        isNaN(parsedSearch) ||
        !Number.isInteger(parsedSearch) ||
        parsedSearch < 1 ||
        parsedSearch > 15
      ) {
        alert("Please enter a number between 1 and 15.");
        return;
      }
      setSearchValue(parsedSearch);
      setShowSearchValue(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="filter">
        <form>
          <div className="textbox">
            <label>
              <input
                type="textbox"
                placeholder="Enter a value 1-15"
                onChange={(event) => setCurrentSearch(event.target.value)}
                input={currentSearch}
              ></input>
            </label>
            <br />
            <button onClick={handleSearch} className="srchbtn">
              Search
            </button>
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
