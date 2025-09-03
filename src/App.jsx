import PropTypes from "prop-types";
import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { useState } from "react";
function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [ReadingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
    console.log(bookmarks);
  };
  const handleMarkAsRead = (time) => {
    const newReadingTime = ReadingTime + time;
    setReadingTime(newReadingTime);
    console.log(ReadingTime);
  };
  return (
    <>
      <main>
        <Header></Header>
        <div className="md:flex mx-auto max-w-7xl ">
          <Blogs
            handleAddToBookmark={handleAddToBookmark}
            handleMarkAsRead={handleMarkAsRead}
          ></Blogs>
          <Bookmarks
            bookmarks={bookmarks}
            ReadingTime={ReadingTime}
          ></Bookmarks>
        </div>
      </main>
    </>
  );
}
App.propTypes = {
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
  bookmarks: PropTypes.array,
};
export default App;
