import { useEffect, useRef } from "react";
import { Form } from "react-bootstrap";

export default function SearchPost({
  title,
  posts,
  searchPosts,
  setSearchPosts,
  setSearchResult,
}) {
  const inputRef = useRef();

  useEffect(() => {
    const filteredResult = posts?.filter(
      (filtered) =>
        filtered?.title.toLowerCase().includes(searchPosts.toLowerCase()) ||
        filtered?.body.toLowerCase().includes(searchPosts.toLowerCase())
    );
    setSearchResult(filteredResult);
  }, [posts, searchPosts, setSearchResult]);

  return (
    <>
      <Form onSubmit={(e) => e.preventDefault()} autoComplete="off">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={inputRef}
            value={searchPosts}
            onChange={(e) => setSearchPosts(e.target.value)}
            type="text"
            placeholder={title}
          />
        </Form.Group>
      </Form>
    </>
  );
}
