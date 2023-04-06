/* eslint-disable jsx-a11y/anchor-is-valid */
import Loading from "../components/Loading";
import PostTitle from "../posts/PostTitle";
import PostFeed from "../posts/PostFeed";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
} from "../../app/helpers/postsSlice";

export default function Homepage() {
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);
  return (
    <>
      {postsStatus === "loading" && <Loading title="Sedang memuat..." />}
      {postsStatus === "error" && <Loading title={error} />}
      {postsStatus === "succeeded" && (
        <>
          <Helmet>
            <title>Redux Blog - Home</title>
            <meta name="description" content="Helmet application" />
          </Helmet>
          <Container className="py-5">
            <div className="row justify-content-center align-items-center g-3">
              <div className="col-lg-10">
                <div>
                  <PostTitle title="Latest Posts" />
                </div>
                <div>
                  <PostFeed posts={posts.slice(0, 10).sort()} />
                </div>
              </div>
            </div>
          </Container>
        </>
      )}
    </>
  );
}
