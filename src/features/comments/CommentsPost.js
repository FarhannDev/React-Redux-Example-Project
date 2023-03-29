import { selectAllPosts } from "../../app/helpers/postsSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CommentsPost({ postId }) {
  const posts = useSelector(selectAllPosts);
  const post = posts?.find((post) => post.id === postId);

  return (
    <div className="mb-3">
      <Link
        to={`/posts/${post.id}`}
        className="btn btn-link text-white text-capitalize text-decoration-none p-0 text-start"
        style={{ fontSize: "24px" }}
      >
        {post ? post.title : "Unknown  Post Title"}
      </Link>
    </div>
  );
}
