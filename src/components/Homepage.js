import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
export default function Homepage() {
  return (
    <>
      <Helmet>
        <title>Redux Blog - Home</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Container className="d-block w-100 pt-5 py-5 mt-3 animate__animated animate__zoomInDown animate__bounce ">
        <Row className="flex-column g-3">
          <Col>
            <div>
              <h1 className="text-capitalize fw-bolder pt-5">
                Welcome Back, Redux Blog😃
              </h1>
              <hr />
            </div>
            <div>
              <Row className="justify-content-arround g-3 pt-3">
                <Col md={6}>
                  <Card className="postCardDetail animate__animated ">
                    <Card.Body>
                      <div>
                        <h3 className="text-uppercase text-white">All Posts</h3>
                      </div>
                      <div>
                        <Card.Text className="py-3 mb-3">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                      </div>

                      <div>
                        <Link
                          to="/posts"
                          className="btn btn-primary btn-md rounded d-block w-100 "
                        >
                          Read More...
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="postCardDetail animate__animated ">
                    <Card.Body>
                      <div>
                        <h3 className="text-uppercase text-white">All Users</h3>
                      </div>
                      <div>
                        <Card.Text className="py-3 mb-3">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                      </div>

                      <div>
                        <Link
                          to="/users"
                          className="btn btn-primary btn-md rounded d-block w-100 "
                        >
                          Read More...
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
