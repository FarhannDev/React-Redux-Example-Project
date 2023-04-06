import { Button, Form } from "react-bootstrap";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { showMessageError, showToastNotification } from "../../utils/message";
import { addNewComments } from "../../app/services/commentsApi";

export default function CommentsAdd({ postId }) {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const onNameChangeHandler = (e) => setName(e.target.value);
  const onEmailChangeHandler = (e) => setEmail(e.target.value);
  const onMessageChangeHandler = (e) => setMessage(e.target.value);
  const onSaveItems =
    [name, email, message].every(Boolean) && addRequestStatus === "idle";
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (onSaveItems) {
      try {
        setAddRequestStatus("pending");
        dispatch(addNewComments({ postId, name, email, message })).unwrap();
        showToastNotification("success", "Your comments is added");

        setName("");
        setEmail("");
        setMessage("");
      } catch (error) {
        console.error("Failed to save the comment", error);
      } finally {
        setAddRequestStatus("idle");
      }
    } else {
      return showMessageError("Oppsss...", "Please check your comment!");
    }
  };

  return (
    <>
      <div>
        <div>
          <h3 className="mb-3">New Comments </h3>
          <hr />
        </div>
        <div>
          <Form
            onSubmit={onSubmitHandler}
            autoComplete="off"
            className="row g-3"
          >
            <Form.Group className="mb-3 col-md-6">
              <Form.Label>Name</Form.Label>
              <Form.Control
                ref={inputRef}
                value={name}
                onChange={onNameChangeHandler}
                type="text"
                placeholder="Your Name"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-md-6">
              <Form.Label>Email</Form.Label>
              <Form.Control
                ref={inputRef}
                value={email}
                onChange={onEmailChangeHandler}
                type="email"
                placeholder="Your Email"
              />
            </Form.Group>
            <Form.Group
              className="mb-3 col-12"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control
                ref={inputRef}
                value={message}
                onChange={onMessageChangeHandler}
                as="textarea"
                rows={6}
                placeholder="Write message...."
              />
            </Form.Group>

            <div className="d-flex justify-content-start p-0 mx-1 ">
              <Button
                disabled={!onSaveItems}
                className="ms-2 mb-3"
                variant="primary"
                type="submit"
              >
                Posts Comments
              </Button>
              <hr />
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
