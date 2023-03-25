import { useRef, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addNewPost } from "../../helpers/postHelper";
import { selectAllUsers } from "../users/usersSlice";
import { showMessageSuccess, showMessageError } from "../../utils/message";

import PostTitle from "./PostTitle";

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
        showMessageSuccess("Berhasil", "Postingan ditambahkan");
        navigate("/");
      } catch (error) {
        console.error("Failed to save the post", error);
      } finally {
        setAddRequestStatus("idle");
      }
    } else {
      return showMessageError("Gagal", "Periksa kembali postingan anda!");
    }
  };
  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <>
      <Container className="d-block w-100 pt-5 py-5 mt-3">
        <Row className="flex-column g-3">
          <Col>
            <PostTitle title="Buat Postingan Baru" />
            <div className="py-3">
              <Card body className="bg-dark">
                <Form onSubmit={onSubmitHandler} autoComplete="off">
                  <Form.Group className="mb-3">
                    <Form.Label>Judul postingan</Form.Label>
                    <Form.Control
                      ref={inputRef}
                      value={title}
                      onChange={onTitleChangeEventHandler}
                      type="text"
                      placeholder="Enter the post title..."
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Penulis</Form.Label>
                    <Form.Select
                      value={userId}
                      onChange={onAuthorChangeEventHandler}
                    >
                      <option value="">---Pilih Penulis----</option>
                      {usersOptions}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Konten</Form.Label>
                    <Form.Control
                      ref={inputRef}
                      value={content}
                      onChange={onContentChangeEventHandler}
                      as="textarea"
                      rows={6}
                      placeholder="Tuliskan kontent postingan..."
                    />
                  </Form.Group>

                  <div className="d-flex justify-content-end py-3">
                    <Link to="/" className="btn btn-dark rounded btn-md">
                      Batalkan
                    </Link>
                    <Button
                      disabled={!onSaveItems}
                      className="ms-2"
                      variant="primary"
                      type="submit"
                    >
                      Buat postingan
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
