import { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deletePost } from "../../helpers/postHelper";
import { selectPostById } from "./postSlice";
import Swal from "sweetalert2";

export default function PostSinglePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate("/");
  const post = useSelector((state) => selectPostById(state, Number(id)));
  const [requestStatus, setRequestStatus] = useState("idle");

  const onDeleteHandler = () => {
    try {
      Swal.fire({
        title: "Konfirmasi",
        text: "Apakah kamu yakin menghapus postingan ini?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Ya, hapus",
      }).then((result) => {
        if (result.isConfirmed) {
          setRequestStatus("pending");
          dispatch(deletePost({ id: post.id })).unwrap();
          // eslint-disable-next-line no-sequences, no-unused-expressions
          Swal.fire("Berhasil", "Postingan dihapus", "success");
          navigate("/");
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
      <Container className="d-block w-100 pt-5 py-5 mt-3">
        <Row className="flex-column g-3">
          <Col>
            <div>
              <Card body className="postCard">
                <Link
                  to="/"
                  className="btn btn-link p-0 text-white text-decoration-none mb-3"
                >
                  <i className="fas fa-arrow-left"></i> Kembali
                </Link>
                <hr />
                <div>
                  <Card.Title>
                    <h3>{post.title}</h3>
                  </Card.Title>
                </div>
                <div className="py-3">
                  <Card.Text>
                    <p className="text-light text-start">{post.body}</p>
                  </Card.Text>
                </div>
                <div className="py-3">
                  <Card.Text>
                    <Button
                      variant="danger"
                      className=" d-block w-100 mb-3 rounded"
                      size="md"
                      onClick={onDeleteHandler}
                    >
                      Hapus postingan
                    </Button>
                    <Link
                      to={`/posts/${post.id}/edit`}
                      className="btn btn-md btn-danger rounded d-block w-100"
                    >
                      Perbarui postingan
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
