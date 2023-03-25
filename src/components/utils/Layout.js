import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      {/* <Navigation /> */}
      <Container fluid className="d-block w-100">
        <Row className="justify-content-center align-content-center">
          <Col lg={6} md={10} sm={12}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
}
