import React from "react";
import { Link } from "gatsby";
import { Row, Col, Button, Container } from "reactstrap";
import Image from "../components/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            <FontAwesomeIcon icon={["fab", "github"]} className=" fa-2x mr-3" />
          </Link>
          <Link to="">
            <FontAwesomeIcon
              icon={["fab", "linkedin-in"]}
              className=" fa-2x mr-3"
            />
          </Link>
          <Link to="">
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              className=" fa-2x mr-3"
            />
          </Link>
          <Link to="">
            <FontAwesomeIcon
              icon={["fab", "instagram"]}
              className=" fa-2x mr-3"
            />
          </Link>
          <Link to="">
            <FontAwesomeIcon
              icon={["fab", "facebook"]}
              className=" fa-2x mr-3"
            />
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
