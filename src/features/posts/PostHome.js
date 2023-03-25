/* eslint-disable jsx-a11y/anchor-is-valid */
import PostTitle from "./PostTitle";
import PostFeed from "./PostFeed";
import SearchPost from "./SearchPost";
import SearchResult from "./SearchResult";
import Loading from "../../components/utils/Loading";
import { selectAllPosts, getPostsStatus, getPostsError } from "./postSlice";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

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
        <Container className="d-block w-100 pt-5 py-5 mt-3">
          <Row className="flex-column g-3">
            <Col>
              <div>
                <PostTitle title="Semua postingan" />
              </div>
              <div>
                <div className="py-3 d-flex justify-content-end">
                  <Link to="/posts" className="btn btn-dark rounded btn-lg">
                    Tambah postingan baru
                  </Link>
                </div>
              </div>
              <div>
                <div className="mb-3 pt-3">
                  <SearchPost
                    title="Cari semua postingan..."
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
      )}
    </>
  );
}
