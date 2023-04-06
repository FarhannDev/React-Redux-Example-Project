import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <Header />
      <Container fluid className="d-block w-100 pt-5 py-5 mt-3">
        <Outlet />
      </Container>
    </>
  );
}
