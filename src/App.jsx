import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { useState } from "react";
function App() {
  const [bookmarks, setBookmarks] = useState([]);
  
  const handleAddToBookmark = (blog) => {
    console.log(" Clicked");
  }
  return (
    <>
      <main>
        <Header></Header>
        <div className="md:flex mx-auto max-w-7xl ">
          <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
          <Bookmarks></Bookmarks>
        </div>
      </main>
    </>
  );
}

export default App;
