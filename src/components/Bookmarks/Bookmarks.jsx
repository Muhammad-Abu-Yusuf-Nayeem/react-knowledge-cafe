import React from "react";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  const { title } = bookmarks;
  return (
    <div className="md:w-1/3 bg-gray-300 p-2 rounded-lg m-2">
      <h2>Bookmarked Blogs: {bookmarks.length}</h2>
      {bookmarks.map((bookmark, idx) => (
        <div key={idx} className="bg-green-100 rounded-lg ml-2">
          <Bookmark bookmark={bookmark}></Bookmark>
        </div>
      ))}
    </div>
  );
};

export default Bookmarks;
