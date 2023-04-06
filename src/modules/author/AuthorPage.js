import { useState } from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { selectUserById } from "../../app/helpers/usersSlice";
import { selectPostByUser } from "../../app/helpers/postsSlice";

import PostTitle from "../posts/PostTitle";
import AuthorPost from "../author/AuthorPost";
import AuthorSearchPost from "../author/AuthorSearchPost";
import AuthorSearchResultPost from "../author/AuthorSearchResultPost";

export default function AuthorPage() {
  const { userId } = useParams();
  const [searchPosts, setSearchPosts] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const user = useSelector((state) => selectUserById(state, Number(userId)));

  const authorPost = useSelector((state) =>
    selectPostByUser(state, Number(userId))
  );

  return (
    <>
      <Helmet>
        <title>Posts By {user?.name}</title>
        <meta property="og:description" content="Search and find posts" />
        <meta property="og:url" content="https://reduxblogapp.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Posts by ${user?.name}`} />
      </Helmet>
      <Container className="d-block w-100 pt-5 py-5 mt-3">
        <Row className="justify-content-center align-items-center g-3">
          <Col lg={10} md={10} sm={12}>
            <div>
              <Link
                to="/posts"
                className="btn btn-link p-0 text-white text-decoration-none mb-3"
              >
                <i className="fas fa-arrow-left"></i> Back
              </Link>

              <div>
                <div className="mb-3">
                  <PostTitle title={`Post By ${user?.name}`} />
                </div>
              </div>

              <div>
                <AuthorSearchPost
                  title={`Search...`}
                  posts={authorPost}
                  searchPosts={searchPosts}
                  setSearchPosts={setSearchPosts}
                  setSearchResult={setSearchResults}
                />
              </div>
              <div>
                {searchPosts && (
                  <AuthorSearchResultPost results={searchResults} />
                )}
                {!searchPosts && <AuthorPost posts={authorPost} />}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
