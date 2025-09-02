import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  return (
    <>
      <div className=" p-4 m-1 rounded-lg">
        <h2 className="text-lg">{bookmark.title}</h2>
      </div>
    </>
  );
};
Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
  title: PropTypes.string,
};
export default Bookmark;
