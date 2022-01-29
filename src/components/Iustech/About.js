
import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

export default function About() {
  return (
    <Container>
      <h3 className="title">Vision</h3>
      <br />
      <br />
      <div id="typography">
        <Row>
          <Col md="6" className="offset-md-3 text-justify" >
            <h4>
              Iustech, a legal and financial software house, is part of IusTechnology ltd group.
              We build products that utilize the most advanced data analysis? as well as new technologies like AI and Blockchain to revolutionize how things are done.
              We assist individuals, businesses as well as authorities by offering high quality legal and financial services with high professional expertise, easily and cost-effective.
              <br />
              <br />
            </h4>
          </Col>
        </Row>
      </div>

      <br />
      <br />

      <h3 className="title">Team</h3>
      <br></br>
      <br></br>

      <div>
        <Row className="text-center">
          <Col className="align-baseline" sm="4" md="4" xs="4">
            <img
              alt="..."
              className="text-center rounded-circle shadow-lg"
              src={require("assets/img/olga.png").default}
              style={{ width: "150px", marginBottom: "50px" }}
            />

            <h3 className="text-center text-justify">Olga Palma</h3>
            <p className="text-justify">
              Olga is a Lawyer with a wide international experience. She holds a Master in Business & Corporate Law from Luiss university in Rome and a LL.M in International and American Law from the Temple University in Philadelphia.
              She was Legal Counsel in SACE, the Italian Export Credit Agency. Additionally, she gained valuable experience as Legal and Corporate Consultant in International Law Firms.
              She believes in a world in which technology is at the service of people and businesses.
            </p>
          </Col>
          <Col className="" sm="4" md="4" xs="4">
            <img
              alt="..."
              className="text-center rounded-circle shadow-lg"
              src={require("assets/img/gaetano.png").default}
              style={{ width: "150px", marginBottom: "50px" }}
            />

            <h3 className="text-center text-justify">Gaetano Mondelli</h3>
            <p className="text-justify">
              Gaetano is a Software Engineer and blockchain expert. He has extensive experience working with Fortune 500 companies like Dyson and Amazon. He invented a protocol to solve the problem of blockchains’ intercommunication. This protocol is used now by a 4B$ market cap token.
              His mission is to participate in high impact, meaningful projects that aim at empowering people.
            </p>
          </Col>
          <Col className="" sm="4" md="4" xs="4">
            <img
              alt="..."
              className="text-center rounded-circle shadow-lg"
              src={require("assets/img/jessica.jpg").default}
              style={{ width: "150px", marginBottom: "50px" }}
            />
            <h3 className="text-center text-justify">Jessica Scuderi</h3>
            <p className="text-justify">
              Jessica is a Scientist. She has a background as a Medical Scientist Manager at a leading pharmaceutical company where later joined the World Wide Medical team in the USA. Her research focused on the most cutting edge field in the industry: how to cure by boosting the immune system.
              She decided to focus her efforts on her dream to start a company to create innovative digital products, and make them available to everyone.
              Her mission is to provide simple solutions for complex issues, and to make them sustainable.

            </p>
          </Col>

        </Row>
      </div>
      <br />
      <br />

      <h3 className="title">Values</h3>
      <br />
      <br />
      <div id="typography">
        <Row>
          <Col md="6" className="offset-md-3 text-justify" >
            <h4>
              We are committed to excellence and use technology as an innovation tool to create a world in which extraordinary products and services make a difference.
              <br />
              <br />
            </h4>
          </Col>
        </Row>

        <Row>
          <Col>
            <blockquote>
              <p className="text-center blockquote blockquote-info">
                Innovation
              </p>
            </blockquote>
          </Col>
          <Col>
            <blockquote>
              <p className="text-center blockquote blockquote-info">
                Creativity
              </p>
            </blockquote>
          </Col>
          <Col>
            <blockquote>
              <p className="text-center blockquote blockquote-info">
                Integrity
              </p>
            </blockquote>
          </Col>
        </Row>

        <Row>
          <Col>
            <blockquote>
              <p className="text-center blockquote blockquote-info">
                Inclusion
              </p>
            </blockquote>
          </Col>
          <Col>
            <blockquote>
              <p className="text-center blockquote blockquote-info">
                Owernship
              </p>
            </blockquote>
          </Col>
          <Col>
            <blockquote>
              <p className="text-center blockquote blockquote-info">
                Kaizen
              </p>
            </blockquote>
          </Col>
        </Row>
      </div>

      <br />
      <br />

      <h3 className="title">Problems of interest</h3>
      <br />
      <br />
      <div id="typography">
        <Row>
          <Col md="6" className="offset-md-3 text-justify" >
            <h4>
              <ul>
                <li>Automatic crypto-tax calculation. Find out more about Cybertax</li>
                <li>Contract automation </li>
                <li>Predictive analysis </li>
              </ul>
              <br />
              <br />
            </h4>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <div className="text-center">
          <h2>Join us if this might seem cool!</h2>
        </div>

      </div>
      <br />
      <br />
      <br />

    </Container>
  );
}
