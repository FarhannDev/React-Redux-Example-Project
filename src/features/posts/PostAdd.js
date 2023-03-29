import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { addNewPost } from "../../app/services/postsApi";
import { selectAllUsers } from "../../app/helpers/usersSlice";
import { showMessageError, showToastNotification } from "../../utils/message";

import PostTitle from "../posts/PostTitle";

export default function PostAdd() {
  const navigate = useNavigate();
  const inputRef = useRef();
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const onTitleChangeEventHandler = (e) => setTitle(e.target.value);
  const onContentChangeEventHandler = (e) => setContent(e.target.value);
  const onAuthorChangeEventHandler = (e) => setUserId(e.target.value);
  const onSaveItems =
    [title, content, userId].every(Boolean) && addRequestStatus === "idle";

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (onSaveItems) {
      try {
        setAddRequestStatus("pending");
        dispatch(addNewPost({ title, body: content, userId })).unwrap();
        // showMessageSuccess("Berhasil", "Postingan ditambahkan");
        showToastNotification("success", "Your post is added");
        navigate("/posts");
      } catch (error) {
        console.error("Failed to save the post", error);
      } finally {
        setAddRequestStatus("idle");
      }
    } else {
      return showMessageError("Oppsss...", "Please check your post!");
    }
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <>
      <Helmet>
        <title>Redux Blog - Create Posts</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Container className="d-block w-100 pt-5 py-5 mt-3">
        <Row className="flex-column g-3">
          <Col>
            <div className="py-3">
              <Card body className="postCard ">
                <PostTitle title="New Posts" />
                <Form onSubmit={onSubmitHandler} autoComplete="off">
                  <Form.Group className="mb-3">
                    <Form.Label>Post Title</Form.Label>
                    <Form.Control
                      ref={inputRef}
                      value={title}
                      onChange={onTitleChangeEventHandler}
                      type="text"
                      placeholder="Enter the post title..."
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Author</Form.Label>
                    <Form.Select
                      value={userId}
                      onChange={onAuthorChangeEventHandler}
                    >
                      <option value="">Select Author</option>
                      {usersOptions}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Content</Form.Label>
                    <Form.Control
                      ref={inputRef}
                      value={content}
                      onChange={onContentChangeEventHandler}
                      as="textarea"
                      rows={8}
                      placeholder="Write content...."
                    />
                  </Form.Group>

                  <div className="d-flex justify-content-end py-3">
                    <Link to="/posts" className="btn btn-dark rounded btn-md">
                      Cancel
                    </Link>
                    <Button
                      disabled={!onSaveItems}
                      className="ms-2"
                      variant="primary"
                      type="submit"
                    >
                      Save Posts
                    </Button>
                  </div>
                </Form>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
