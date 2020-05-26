import React from "react";
import { Link } from "gatsby";
import { Row, Col, Button, Container } from "reactstrap";
import Image from "../components/image";

const Header = () => {
  return (
    <Container className="py-1">
      <Row>
        <Col className="col-lg-3 col-sm-12 text-center pr-0">
          <Image />
        </Col>
        <Col className="col-lg-4 col-sm-12 mt-3">
          <h2>Uche Mukolo</h2>
          <h4>Software Developer</h4>
          <Link to="">
            <i className="fab fa-github fa-2x mr-3"></i>
          </Link>
          <Link to="">
            <i className="fab fa-linkedin-in fa-2x mr-3"></i>
          </Link>
          <Link to="">
            <i className="fab fa-twitter fa-2x mr-3"></i>
          </Link>
          <Link to="">
            <i className="fab fa-instagram fa-2x mr-3"></i>
          </Link>
          <Link to="">
            <i className="fab fa-facebook fa-2x"></i>
          </Link>
        </Col>
        <Col className="mt-5 contact-button">
          <a href="mailto:uchek7@gmail.com">
            <Button color="default">Contact Me</Button>{" "}
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
