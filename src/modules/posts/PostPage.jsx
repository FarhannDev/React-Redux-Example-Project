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
import SearchPost from "../posts/PostSearch";
import SearchResult from "../posts/PostSearchResult";

export default function PostPage() {
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
        <>
          <Helmet>
            <title>Redux Blog - All Posts</title>
            <meta property="og:description" content="Search and find posts" />
            <meta
              property="og:url"
              content="https://reduxblogapp.netlify.app/"
            />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="All Posts" />
          </Helmet>
          <Container className="py-5">
            <div className="row justify-content-center align-items-center g-3">
              <div className="col-lg-10">
                <div>
                  <PostTitle title="All Posts List" />
                </div>
                <div className="row justify-content-start">
                  <div className="col-lg-12">
                    <div className="py-3 d-flex justify-content-end">
                      <Link
                        to="/posts/add"
                        className="btn btn-dark rounded btn-lg"
                      >
                        Create New Posts
                      </Link>
                    </div>
                    <div className="mb-4">
                      <SearchPost
                        title="Search All Posts..."
                        posts={posts}
                        searchPosts={searchPosts}
                        setSearchPosts={setSearchPosts}
                        setSearchResult={setSearchResults}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  {searchPosts && <SearchResult results={searchResults} />}
                  {!searchPosts && <PostFeed posts={posts} />}
                </div>
              </div>
            </div>
          </Container>
        </>
      )}
    </>
  );
}
