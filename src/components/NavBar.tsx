import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { PostContext } from "../hooks/PostsContext";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const {
    editorKey,
    isEditor,
    articles,
    setIsEditor,
    articlesToDisplay,
    setArticlesToDisplay,
  } = useContext(PostContext)!;

  const navigate = useNavigate();

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
    }
  };
  const handleEdit = () => {
    const userKey = prompt("Enret Editor Key");
    {
      userKey === editorKey ? setIsEditor(true) : alert("wrong key try agein");
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="../../src/images/middle-east.jpg" alt="" />
        <h1>MiddleEastern</h1>
      </div>
      {isEditor ? <h2>Welcome Editor</h2> : ""}
      <p>{`Foubd ${articlesToDisplay.length} Articles`}</p>

      <div className="nav-links">
        <select name="" id="" onChange={handleSourceChange}>
          <option key={"All"} value="All">All</option>
          {articles.map((a) => {
            return (
              <option
                key={a.url}
                value={a.source.name.toLocaleLowerCase()}
              >
                {a.source.name.toLocaleLowerCase()}
              </option>
            );
          })}
        </select>

        <button onClick={handleEdit}>{isEditor? "Edit":"Sign out"}</button>
        <Link to={"/About"}>About</Link>
        <a href="">Contact</a>
      </div>
    </nav>
  );
};

export default NavBar;
