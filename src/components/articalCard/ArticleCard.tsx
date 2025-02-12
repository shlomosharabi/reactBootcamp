import React, { useState } from "react";

const ArticleCard = ({ article, index }) => {

  const defaultImage = "src/images/Tzvi-yechezkely.jpg";
  const  [imageSrc,setImageSrc] = useState(article.urlToImage || defaultImage)

  return (
    <>
      
        <div key={index} className="article">
          <h2>{article.source.id}</h2>
          <h2>{article.title}</h2>
          <img
        src={imageSrc}
        alt={article.title}
        onError={() => {
          if (imageSrc !== defaultImage) {
            setImageSrc(defaultImage);
          }
        }}
      />
          <h3>{article.source.name}</h3>
          <a href={article.url}>read</a>
        </div>
    </>
  );
};

export default ArticleCard;
