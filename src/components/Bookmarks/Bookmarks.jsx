import React from "react";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, ReadingTime }) => {
  const { title } = bookmarks;
  return (
    <div className="md:w-1/3">
      <div>
        <h2 className="border py-4 rounded-lg  p-2 m-2 bg-amber-100 font-bold text-xl">
          Reading Time: {ReadingTime}
        </h2>
      </div>

      <div className=" bg-gray-300 p-2 rounded-lg m-2 ">
        <h2 className="font-bold text-xl">
          Bookmarked Blogs: {bookmarks.length}
        </h2>
        {bookmarks.map((bookmark, idx) => (
          <div key={idx} className="bg-green-100 rounded-lg ml-2">
            <Bookmark bookmark={bookmark}></Bookmark>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
