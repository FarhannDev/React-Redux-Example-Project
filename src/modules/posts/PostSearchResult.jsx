/* eslint-disable jsx-a11y/anchor-is-valid */
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import PostTimeAgo from "./PostTimeAgo";
import PostAuthor from "./PostAuthor";
import Message from "../../components/utils/Message";

export default function PostSearchResult({ results }) {
  const orderedPostsResult = results
    ?.slice()
    .sort((a, b) => b.createdAt.localeCompare(a.date));

  return (
    <>
      {!results.length && <Message message="Post not found." />}
      {results && (
        <>
          <div className="row justify-content-arround align-content-start g-3 position-relative">
            {orderedPostsResult?.map((result, index) => (
              <div
                key={index}
                className="col-xl-6 col-lg-5 col-md-12 col-sm-12"
              >
                <Card className="postCard mb-3" body>
                  <div className="postTitle">
                    <Link
                      to={`/posts/${result.id}`}
                      className="text-white text-decoration-none"
                    >
                      {`${result.title.slice(0, 50)}...`}
                    </Link>
                  </div>

                  <div className="d-block w-100 mb-3">{`${result.body.slice(
                    0,
                    150
                  )}...`}</div>
                  <div>
                    <div className="d-block w-100 position-relative top-0 bottom-0  ">
                      <PostAuthor userId={result.userId} />
                      <PostTimeAgo timestamp={result.createdAt} />
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
