import React from 'react';

// IMPORT REACT BOOTSTRAP
import { Row, Col } from 'react-bootstrap';

const ContentAutoComplete = (props) => {
  const { name, images } = props;

  return (
    <Row>
      <Col xs={12} md={6}>
        <img src={images} className="img-fluid" alt="posterimages" />
        <h5>{name}</h5>
      </Col>
    </Row>
  );
};

export default ContentAutoComplete;
