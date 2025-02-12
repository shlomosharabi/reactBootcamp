import React, { useEffect, useContext } from "react";
import { PostContext } from "../../hooks/PostsContext";
import "./writersCard.css";
import { useNavigate } from "react-router-dom";
import ArticleCard from "../articalCard/ArticleCard";

const WritersCard = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("PostContext must be used within a PostProvider");
  }

  const {
    URL,
    articles,
    setArticles,
    articlesToDisplay,
    setArticlesToDisplay,
  } = context;

  const navigate = useNavigate();

  const handleNavigate = (id: string) => {
    navigate(`/article/${id}`);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error(`Http error status: ${response.status}`);
        }
        const data = await response.json();
        setArticles(data.articles);

        if (
          JSON.stringify(articlesToDisplay) !== JSON.stringify(data.articles)
        ) {
          setArticlesToDisplay(data.articles);
        }
      } catch (error) {
        console.error(`error fetching data ${error.message}`);
      }
    }

    fetchData();
  }, [URL]);
  useEffect(() => {
    console.log(articlesToDisplay);
  }, [articlesToDisplay]);

  return (
    <>
      <div key={"writers-container"} className="writers-container">
        {articlesToDisplay.map((article, index: number) => (
          <ArticleCard key={article.url} article={article} index={index} />
        ))}
      </div>
    </>
  );
};

export default WritersCard;
