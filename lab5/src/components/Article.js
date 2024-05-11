import React, { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";

const Article = () => {
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState("viewed");
  const [timeFrame, setTimeFrame] = useState("1");

  useEffect(() => {
    fetchData();
  }, [sortBy, timeFrame]); // Depend on sortBy and timeFrame

  const onSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  const onTimeFrameChange = (e) => {
    setTimeFrame(e.target.value);
  };

  const fetchData = () => {
    const sortBy =
      document.querySelector('input[name="sortBy"]:checked')?.value || "viewed";
    const timeFrame =
      document.querySelector('input[name="timeFrame"]:checked')?.value || "1";
    const url = `https://api.nytimes.com/svc/mostpopular/v2/${sortBy}/${timeFrame}.json?api-key=hq8UvsE7d5E45IbmtT2XKu8jkpDHV31t`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.results) {
          setArticles(data.results.slice(0, 6));
        }
      })
      .catch((error) => console.log("Error:", error));
  };

  return (
    <div style={{ display: "flex" }}>
      <div className="left">
        <Sidebar
          sortBy={sortBy}
          timeFrame={timeFrame}
          onSortByChange={onSortByChange}
          onTimeFrameChange={onTimeFrameChange}
        />
      </div>
      <div className="right">
        <div className="posts">
          <div className="left">
            {articles.map((article, index) => {
              if (index % 2 === 0) {
                return (
                  <div className="post" key={index}>
                    <div className="articleHeader">
                      <div className="articleTitle">
                        {index + 1}. {article.title}
                      </div>
                      <div className="articleDate">
                        {article.published_date}
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "10px",
                        marginRight: "10px",
                      }}
                    >
                      <div className="articleImg">
                        <img
                          src={article.media[0]?.["media-metadata"][0]?.url}
                          alt="Article Image"
                        />
                      </div>
                      <div className="articleAbstract">{article.abstract}</div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="right">
            {articles.map((article, index) => {
              if (index % 2 !== 0) {
                return (
                  <div className="post" key={index}>
                    <div className="articleHeader">
                      <div className="articleTitle">
                        {index + 1}. {article.title}
                      </div>
                      <div className="articleDate">
                        {article.published_date}
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "10px",
                        marginRight: "10px",
                      }}
                    >
                      <div className="articleImg">
                        <img
                          src={article.media[0]?.["media-metadata"][0]?.url}
                          alt="Article Image"
                        />
                      </div>
                      <div className="articleAbstract">{article.abstract}</div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
