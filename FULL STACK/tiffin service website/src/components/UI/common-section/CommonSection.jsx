import React from "react";
import { Container } from "reactstrap";
import "../../../styles/commoncontainer.css";
import "bootstrap/dist/css/bootstrap.css";

const CommonSection = (props) => {
  return (
    <section className="commonsection">
      <Container>
        <h2 className="text-white">Don't Wait to Order Our Delicious Food</h2>
      </Container>
    </section>
  );
};

export default CommonSection;
