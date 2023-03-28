/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Helmet } from "react-helmet";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
} from "../../app/helpers/postsSlice";

import Loading from "../../components/utils/Loading";
import PostTitle from "../posts/PostTitle";
import PostFeed from "../posts/PostFeed";
import SearchPost from "../posts/SearchPost";
import SearchResult from "../posts/SearchResult";

export default function PostHome() {
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);
  const [searchPosts, setSearchPosts] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
    <>
      {postsStatus === "loading" && <Loading title="Sedang memuat..." />}
      {postsStatus === "error" && <Loading title={error} />}
      {postsStatus === "succeeded" && (
        <div>
          <Helmet>
            <title>Redux Blog - All Posts</title>
            <meta name="description" content="Helmet application" />
          </Helmet>
          <Container className="d-block w-100 pt-5 py-5 mt-3">
            <Row className="flex-column g-3">
              <Col>
                <div>
                  <PostTitle title="All Posts List" />
                </div>
                <div>
                  <div className="py-3 d-flex justify-content-end">
                    <Link
                      to="/posts/create"
                      className="btn btn-dark rounded btn-lg"
                    >
                      Create New Posts
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="mb-3 pt-3">
                    <SearchPost
                      title="Search All Posts..."
                      posts={posts}
                      searchPosts={searchPosts}
                      setSearchPosts={setSearchPosts}
                      setSearchResult={setSearchResults}
                    />
                  </div>
                </div>
                <div>
                  {searchPosts && <SearchResult results={searchResults} />}
                  {!searchPosts && <PostFeed posts={posts} />}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
}
