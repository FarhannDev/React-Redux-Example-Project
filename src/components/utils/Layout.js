import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <Header />
      <Container fluid className="d-block w-100 py-5">
        <Row className="justify-content-center align-content-center">
          <Col lg={6} md={10} sm={12}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
}
