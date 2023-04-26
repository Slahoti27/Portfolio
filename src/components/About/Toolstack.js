import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiWindows,
  SiPycharm,
  SiGithub,
  SiPhpmyadmin,
  SiGooglechrome,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhpmyadmin/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglechrome/>
      </Col>
    </Row>
  );
}

export default Toolstack;
