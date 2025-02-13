import React, { useState } from "react";

const ArticleCard = ({ article, index }) => {

  const defaultImage = "data:image/png;base64,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";
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
