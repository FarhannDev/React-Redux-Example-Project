/* eslint-disable jsx-a11y/anchor-is-valid */
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactionButtons from "../posts/ReactionButtons";
import PostTimeAgo from "../posts/PostTimeAgo";
import PostAuthor from "../posts/PostAuthor";

export default function PostFeed({ posts }) {
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.createdAt.localeCompare(a.date));

  return (
    <>
      {orderedPosts?.map((post, index) => (
        <div
          key={index}
          className="animate__animated animate__bounceInUp animate__backInUp "
        >
          <Card className="postCard mb-3 " body>
            <div className="postTitle">
              <Link
                to={`/posts/${post.id}`}
                className="text-white text-decoration-none"
              >
                {post.title}
              </Link>
            </div>

            <div className="postBody">{`${post.body.slice(0, 250)}...`}</div>
            <span className="d-flex justify-content-arround">
              <PostAuthor userId={post.userId} />
              <PostTimeAgo timestamp={post.createdAt} />
            </span>
            <ReactionButtons post={post} />
          </Card>
        </div>
      ))}
    </>
  );
}
