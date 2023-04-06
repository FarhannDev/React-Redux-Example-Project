/* eslint-disable jsx-a11y/anchor-is-valid */
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import PostTimeAgo from "../posts/PostTimeAgo";
import PostAuthor from "../posts/PostAuthor";

export default function AuthorPost({ posts }) {
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.createdAt.localeCompare(a.date));

  return (
    <>
      <div className="row justify-content-arround align-content-start g-3 position-relative">
        {orderedPosts?.map((post, index) => (
          <div key={index} className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <Card className="postCard mb-3 " body>
              <div className="postTitle">
                <Link
                  to={`/posts/${post.id}`}
                  className="text-white text-decoration-none"
                >
                  {post.title}
                </Link>
              </div>

              <div className="d-block w-100 mb-3">{`${post.body.slice(
                0,
                150
              )}...`}</div>
              <div>
                <div className="d-block w-100 position-relative top-0 bottom-0  ">
                  <PostAuthor userId={post.userId} />
                  <PostTimeAgo timestamp={post.createdAt} />
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
