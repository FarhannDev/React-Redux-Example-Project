/* eslint-disable jsx-a11y/anchor-is-valid */
import { Card } from "react-bootstrap";
import ReactionButtons from "./ReactionButtons";
import PostTimeAgo from "./PostTimeAgo";
import PostAuthor from "./PostAuthor";
import Message from "../../components/utils/Message";

export default function SearchResult({ results }) {
  const orderedPostsResult = results
    ?.slice()
    .sort((a, b) => b.createdAt.localeCompare(a.date));

  return (
    <>
      {!results.length && <Message message="Postingan tidak ditemukan." />}
      {results && (
        <>
          {orderedPostsResult?.map((result, index) => (
            <Card key={index} className="postCard mb-3" body>
              <div className="postTitle">
                <a href="#" className="text-white text-decoration-none">
                  {result.title}
                </a>
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
          ))}
        </>
      )}
    </>
  );
}
