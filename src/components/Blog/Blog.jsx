import PropTypes from "prop-types";
import { FaBeer } from "react-icons/fa";
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    id,
    title,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
    cover,
  } = blog;
  return (
    <div className="mb-20 space-y-4" key={id}>
      <img
        src={cover}
        className="w-full mb-8 h-[400px] object-cover rounded-lg"
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between">
        <div className="flex items-center mb-4">
          <img src={author_img} alt="" className="w-14  rounded-full" />
          <div className="ml-4">
            <h3 className="text-xl ">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="ml-4 p-2 border rounded-full"
          >
            <IoBookmarksOutline />{" "}
          </button>
        </div>
      </div>
      <p className="text-2xl">{title}</p>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">{hash} </a>
          </span>
        ))}
      </p>
      <button
        className="text-purple-600 font-bold"
        onClick={() => handleMarkAsRead(id,reading_time)}
      >
        Mark As Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  publishDate: PropTypes.string,
  readTime: PropTypes.string,
  blogImage: PropTypes.string,
  tags: PropTypes.array.isRequired,
};
export default Blog;
