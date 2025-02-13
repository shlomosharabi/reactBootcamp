import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../../hooks/PostsContext";
import "./navBar.css"
const NavBar: React.FC = () => {
  const { articles, articlesToDisplay, setArticlesToDisplay } =
    useContext(PostContext)!;

  const handleSourceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "All") {
      setArticlesToDisplay(articles);
    } else {
      const filteredArticles = articles.filter(
        (a) =>
          a.source.name.toLocaleLowerCase() ==
          event.target.value.toLocaleLowerCase()
      );
      setArticlesToDisplay(filteredArticles);
      console.log(articlesToDisplay[0].source.name);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="../../src/images/middle-east.jpg" alt="" />
        <h1>MiddleEastern</h1>
      </div>
      <div>
        {articlesToDisplay.length < articles.length ? (
          <p>{`Found ${articlesToDisplay.length} Articles Of ${articlesToDisplay[0].source.name}`}</p>
        ) : (
          ""
        )}
      </div>

      <div className="nav-select">
        <select name="" id="" onChange={handleSourceChange}>
          <option key={"All"} value="All">
            All
          </option>
          {articles.map((a) => {
            return (
              <option key={a.url} value={a.source.name.toLocaleLowerCase()}>
                {a.source.name.toLocaleLowerCase()}
              </option>
            );
          })}
        </select>
        
      </div>
      <div className="nav-links">
        <Link to={"/About"}>About</Link>
        <a href="">Contact</a>

      </div>
      
    </nav>
  );
};

export default NavBar;
