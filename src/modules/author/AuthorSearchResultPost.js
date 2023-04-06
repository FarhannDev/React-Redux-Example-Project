/* eslint-disable jsx-a11y/anchor-is-valid */
import ReactionButtons from "../reactions/ReactionButtons";
import PostTimeAgo from "../posts/PostTimeAgo";
import PostAuthor from "../posts/PostAuthor";
import Message from "../../components/utils/Message";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AuthorSearchResultPost({ results }) {
  const orderedPostsResult = results
    ?.slice()
    .sort((a, b) => b.createdAt.localeCompare(a.date));

  return (
    <>
      {!results.length && <Message message="Postingan tidak ditemukan." />}
      {results && (
        <>
          {orderedPostsResult?.map((result, index) => (
            <div key={index} className="animate__animated animate__bounceInUp">
              <Card className="postCard mb-3" body>
                <div className="postTitle">
                  <Link
                    to={`/posts/${result.id}`}
                    className="text-white text-decoration-none"
                  >
                    {result.title}
                  </Link>
                </div>

                <div className="postBody">{`${result.body.slice(
                  0,
                  250
                )}...`}</div>
                <span className="d-flex justify-content-arround">
                  <PostAuthor userId={result.userId} />
                  <PostTimeAgo timestamp={result.createdAt} />
                </span>
                <ReactionButtons post={result} />
              </Card>
            </div>
          ))}
        </>
      )}
    </>
  );
}
