import PropTypes from "prop-types";

const Blog = ({ blog }) => {
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
    <div className="" key={id}>
      <img src={cover} alt={`Cover picture of the title ${title}`} />
      <div className="flex justify-between">
        <div className="flex items-center">
          <img src={author_img} alt="" className="w-14 rounded-full" />
          <div className="ml-4">
            <h3 className="text-xl ">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
        </div>
      </div>
      <p className="text-2xl">{title}</p>
          <p>{hashtags.map((hash,idx,) => <span key={idx}><a href="">{ hash}  </a></span>)}</p>
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
