import { useRef, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { updatePost } from "../../app/services/postsApi";
import { selectPostById } from "../../app/helpers/postsSlice";
import { selectAllUsers } from "../../app/helpers/usersSlice";
import { showMessageError, showToastNotification } from "../../utils/message";

import PostTitle from "./PostTitle";

export default function PostEdit() {
  const { id } = useParams();

  const post = useSelector((state) => selectPostById(state, Number(id)));
  const users = useSelector(selectAllUsers);

  const navigate = useNavigate();
  const inputRef = useRef();
  const dispatch = useDispatch();

  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.body);
  const [userId, setUserId] = useState(post?.userId);
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
        // dispatch(addNewPost({ title, body: content, userId })).unwrap();
        dispatch(
          updatePost({
            id: post.id,
            title,
            body: content,
            userId,
            reactions: post.reactions,
          })
        ).unwrap();

        // showMessageSuccess("Berhasil", "Postingan diperbarui");
        showToastNotification("success", "Your post is updated");
        navigate(`/posts/${id}`);
      } catch (error) {
        console.error("Failed to save the post", error);
      } finally {
        setAddRequestStatus("idle");
      }
    } else {
      return showMessageError("Oppsss....", "Double check your post!");
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
        <title>Posts Edit - {post?.title}</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Container className="d-block w-100 pt-5 py-5 mt-3">
        <Row className="flex-column g-3">
          <Col>
            <PostTitle title="Edit Posts" />
            <div className="py-3">
              <Card body className="bg-dark">
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
                      <option value="">---Select Author---</option>
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
                      rows={6}
                      placeholder="Write content..."
                    />
                  </Form.Group>

                  <div className="d-flex justify-content-end py-3">
                    <Link
                      to={`/posts/${id}`}
                      className="btn btn-dark rounded btn-md"
                    >
                      Cancel
                    </Link>
                    <Button
                      disabled={!onSaveItems}
                      className="ms-2"
                      variant="primary"
                      type="submit"
                    >
                      Update Posts
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
