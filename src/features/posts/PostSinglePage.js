import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deletePost } from "../api/customPostsApi";
import { selectPostById } from "../../utils/postsSlice";
import { showToastNotification } from "../../utils/message";
import PostAuthor from "../posts/PostAuthor";
import PostTimeAgo from "../posts/PostTimeAgo";
import Swal from "sweetalert2";
import ReactionButtons from "./ReactionButtons";

export default function PostSinglePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate("/");
  const post = useSelector((state) => selectPostById(state, Number(id)));
  const [requestStatus, setRequestStatus] = useState("idle");

  const onDeleteHandler = () => {
    try {
      Swal.fire({
        title: "Delete Confirm",
        text: "Are you sure you want to delete this post?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#1c1c1a",
        confirmButtonText: "Yes, Delete",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          setRequestStatus("pending");
          dispatch(deletePost({ id: post.id })).unwrap();
          // eslint-disable-next-line no-sequences, no-unused-expressions
          // Swal.fire("Berhasil", "Postingan dihapus", "success");
          showToastNotification("success", "Your post has been deleted");
          navigate("/posts");
        }
      });
    } catch (error) {
      console.log(error.message);
    } finally {
      setRequestStatus("idle");
    }
  };

  return (
    <>
      <Helmet>
        <title>{post?.title}</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Container className="d-block w-100 pt-5 py-5 mt-3">
        <Row className="flex-column g-3">
          <Col>
            <div>
              <Card body className="postCardDetail">
                <Link
                  to="/posts"
                  className="btn btn-link p-0 text-white text-decoration-none"
                >
                  <i className="fas fa-arrow-left"></i> Back To Posts
                </Link>
                <hr />
                <div>
                  <Card.Title>
                    <h3>{post.title}</h3>
                  </Card.Title>
                </div>
                <div className="py-3">
                  <Card.Text>{post.body}</Card.Text>
                </div>
                <div>
                  <span className="d-flex justify-content-arround">
                    <PostAuthor userId={post.userId} />
                    <PostTimeAgo timestamp={post.createdAt} />
                  </span>
                  <div className="mb-3">
                    <ReactionButtons post={post} />
                  </div>
                </div>
                <div className="py-3 pt-3 mb-2">
                  <Card.Text>
                    <Button
                      variant="danger"
                      className=" d-block w-100 mb-3 rounded"
                      size="md"
                      onClick={onDeleteHandler}
                    >
                      Delete Posts
                    </Button>
                    <Link
                      to={`/posts/${post.id}/edit`}
                      className="btn btn-md btn-danger rounded d-block w-100"
                    >
                      Update Posts
                    </Link>
                  </Card.Text>
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
