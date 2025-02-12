import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import AuthorBlog from "./pages/AuthorBlog";
import { PostContext } from "./hooks/PostsContext";
import usePosts from "./hooks/usePosts";
import ArticleCard from "./components/articalCard/ArticleCard";
import Layout from "./layout/Layout";
import About from "./pages/About";

function App() {
  const {
    articles,
    setArticles,
    filterdArticleBYSuorce,
    logoImage,
    editorKey,
    isEditor,
    setIsEditor,
    URL,
    articlesToDisplay,
    setArticlesToDisplay,
  } = usePosts();

  return (
    <>
      <PostContext.Provider
        value={{
          articles,
          setArticles,
          filterdArticleBYSuorce,
          logoImage,
          editorKey,
          isEditor,
          setIsEditor,
          URL,
          articlesToDisplay,
          setArticlesToDisplay,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/AuthorBlog/:id" element={<AuthorBlog />} />
              <Route path="/article/:id" element={<ArticleCard />} />
              <Route path="/About" element={<About />} />
            </Route>
          </Routes>
        </Router>
      </PostContext.Provider>
    </>
  );
}

export default App;
