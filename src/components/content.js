import React from "react";
import { Link } from "gatsby";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  Row,
  Col,
  CardSubtitle,
  CardBody,
  Progress,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Content = props => {
  return (
    <Row className="my-3" style={{ display: "flex" }}>
      <Col className="col-lg-7 ml-4 mb-3">
        <div className="shadow-sm">
          <Card>
            <CardBody>
              <CardTitle>
                <h2 className="card-title">About Me</h2>
              </CardTitle>
              <CardText>
                I am a Software Engineer with industry experience in building
                websites and web applications. I specialise in JavaScript and I
                have professional experience working with ReactJs, SQL, NodeJs,
                ExpressJs, Redux
              </CardText>
            </CardBody>
          </Card>
        </div>
        <div className="shadow-sm mb-3 mt-3">
          <Card>
            <CardBody>
              <CardTitle>
                <h2 className="card-title">Latest Projects</h2>
              </CardTitle>
              <CardImg
                top
                width="100%"
                src="/assets/256x186.svg"
                alt="Card image cap"
              />
              <CardText>
                This card has supporting text below as a natural lead-in to
                additional content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
        <div div className="shadow-sm mb-3 mt-3">
          <Card>
            <CardBody>
              <CardTitle className="card-title">
                <h2>Work Experience</h2>
              </CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText></CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
        <div div className="shadow-sm mb-3 mt-3">
          <Card
            body
            inverse
            style={{ backgroundColor: "#333", borderColor: "#333" }}
          >
            <CardTitle className="card-title"></CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button>Button</Button>
          </Card>
        </div>
      </Col>
      <Col className="col-lg-4 ml-4 mb-3">
        <div div className="shadow-sm">
          <Card>
            <CardBody>
              <CardText>
                <ul className="list-unstyled">
                  <li>
                    <FontAwesomeIcon icon="map-marker-alt" className="fa-md" />
                    <span className="no-link-color">Lagos, NG</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon="envelope" className=" fa-md" />
                    <Link to="#">
                      <span className="link-color"> uchek7@gmail.com</span>
                    </Link>
                  </li>
                  <li>
                    <FontAwesomeIcon icon="link" className=" fa-md" />
                    <Link to="#">
                      <span className="link-color"> andela.com</span>
                    </Link>
                  </li>
                </ul>
              </CardText>
            </CardBody>
          </Card>
        </div>
        <div div className="shadow-sm mb-3 mt-3">
          <Card body inverse color="#ffffff">
            <CardTitle>
              <h2 className="card-title">Skills</h2>
            </CardTitle>
            <CardText>
              <div>
                <div className="text-center">​HTML5 | CSS3/SASS</div>
                <Progress value="8" max="10" />
                <div className="text-center">JavaScript | TypeScript</div>
                <Progress value={7} max="10" />
                <div className="text-center">NodeJS | ExpressJS</div>
                <Progress value={7} max={10} />
                <div className="text-center">ReactJs/Redux</div>
                <Progress value="8" max={10} />
                <div className="text-center">​GatsbyJs</div>
                <Progress value={7} max={10} />
                <div className="text-center"> Ant Design | Bootstrap</div>
                <Progress value="8" max="10" />
                <div className="text-center">
                  {" "}
                  ​Postgres/Sequelize | MongoDB/Mongoose | SQL
                </div>
                <Progress value={6} max="10" />
                <div className="text-center">Heroku</div>
                <Progress value={6} max={10} />
                <div className="text-center">
                  Mocha/Chai | Jest/Enzyme | Cypress
                </div>
                <Progress value="7" max={10} />
                <div className="text-center">
                  Gitlab | Circle CI | Travis CI | Code Climate
                </div>
                <Progress value="7" max={10} />
              </div>
            </CardText>
          </Card>
        </div>
      </Col>
    </Row>
  );
};

export default Content;
