import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllUsers } from "../../app/helpers/usersSlice";

export default function UserPage() {
  const users = useSelector(selectAllUsers);

  const renderedUsers = users?.map((user, index) => (
    <tr key={user.id}>
      <td className="text-white">{index + 1}</td>
      <td className="text-white">
        <Link
          to={`/posts/author/${user.id}`}
          className="text-white text-decoration-none"
        >
          {user.name}
        </Link>
      </td>
      <td className="text-white">{user.email}</td>
      <td className="text-white">
        <a
          href={`https://${user.website}`}
          target="_blank"
          className="btn p-0 btn-link text-underline-none"
          rel="noreferrer"
        >
          {user.website}
        </a>
      </td>
    </tr>
  ));

  return (
    <>
      <Helmet>
        <title>Redux Blog - All Users</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Container className="d-block w-100 pt-5 py-5 mt-3  ">
        <Row className="justify-content-center g-3">
          <Col lg={8} md={10} sm={12}>
            <div>
              <h1 className="text-capitalize fw-bolder pt-5 mb-3">
                List All Users
              </h1>
            </div>
            <div>
              <Card className="postCardDetail animate__animated ">
                <div>
                  <Table striped responsive>
                    <thead>
                      <tr>
                        <th className="text-white col-*">#</th>
                        <th className="text-white col-*">Name</th>
                        <th className="text-white col-*">Email</th>
                        <th className="text-white col-*">Website</th>
                      </tr>
                    </thead>
                    <tbody>{renderedUsers}</tbody>
                  </Table>
                </div>
                <div>
                  <div className="d-flex justify-content-center align-item-center mb-3">
                    Showing All User ({users.length})
                  </div>
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
