import React, { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import Title from "./Title";

const Article = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [sortBy, setSortBy] = useState("viewed");
  const [timeFrame, setTimeFrame] = useState("1");
  const [showSearchValue, setShowSearchValue] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchData();
    // console.log(articles[0]);
  }, [sortBy, timeFrame]);

  const onSortByChange = (e) => {
    setShowSearchValue(false);
    setSortBy(e.target.value);
  };

  const onTimeFrameChange = (e) => {
    setShowSearchValue(false);
    setTimeFrame(e.target.value);
  };

  const fetchData = () => {
    const url = `https://api.nytimes.com/svc/mostpopular/v2/${sortBy}/${timeFrame}.json?api-key=hq8UvsE7d5E45IbmtT2XKu8jkpDHV31t`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          setArticles(data.results.slice(0, 15));
        }
      })
      .catch((error) => console.log("Error:", error));
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div className="left">
          <Title sortBy={sortBy} timeFrame={timeFrame} />
          <Sidebar
            sortBy={sortBy}
            timeFrame={timeFrame}
            onSortByChange={onSortByChange}
            onTimeFrameChange={onTimeFrameChange}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            setShowSearchValue={setShowSearchValue}
          />
        </div>
        <div
          className="articlesGrid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5px",
          }}
        >
          {showSearchValue ? (
            <div className="post">
              <div className="articleHeader">
                <div className="articleTitle">
                  {articles[searchValue - 1].title}
                </div>
                <div className="articleDate">
                  {articles[searchValue - 1].published_date}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "10px",
                }}
              >
                <div className="articleImg">
                  <img
                    src={
                      articles[searchValue - 1].media[0]?.["media-metadata"][0]
                        ?.url
                    }
                    alt="Article Image"
                  />
                </div>
                <div className="articleAbstract">
                  {articles[searchValue - 1].abstract}
                </div>
              </div>
            </div>
          ) : (
            currentPosts.map((article, index) => (
              <div className="post" key={index}>
                <div className="articleHeader">
                  <div className="articleTitle">
                    {index + 1 + (currentPage - 1) * postsPerPage}.{" "}
                    {article.title}
                  </div>
                  <div className="articleDate">{article.published_date}</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "10px",
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
            ))
          )}
        </div>
      </div>
      <div className="pagination">
        {!showSearchValue &&
          Array.from(
            { length: Math.ceil(articles.length / postsPerPage) },
            (_, i) => (
              <button key={i} onClick={() => paginate(i + 1)}>
                {i + 1}
              </button>
            )
          )}
      </div>
    </div>
  );
};

export default Article;
