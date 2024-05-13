import React from "react";
import './Title.css'; 
const Title = ({ sortBy, timeFrame }) => {
  let sortByText = "";
  let timeFrameText = "";

  if (sortBy === "viewed") {
    sortByText = "Most Viewed";
  } else if (sortBy === "shared") {
    sortByText = "Most Shared";
  } else if (sortBy === "emailed") {
    sortByText = "Most Emailed";
  }

  if (timeFrame === "1") {
    timeFrameText = "Day";
  } else if (timeFrame === "7") {
    timeFrameText = "Week";
  } else if (timeFrame === "30") {
    timeFrameText = "Month";
  }

  return (
    <div className="title">
      <p>{sortByText} - {timeFrameText}</p>
    </div>
  );
};

export default Title;
