import React from 'react';
// IMPORT FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faArrowsRotate, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
// IMPORT REACT BOOTSTRAP
import { Row, Col } from 'react-bootstrap';

const SingleService = () => {
  return (
    <Row className="p-5 mt-5 gap-5 gap-md-0">
      <Col xs={12} md={3} className="d-flex flex-column flex-md-row justify-content-center text-center text-md-start align-items-center">
        <FontAwesomeIcon icon={faClock} size="4x" />
        <div className="response ms-2 mt-3 mt-md-0">
          <h5>FAST RESPONSE</h5>
          <h5 className="text-muted">24 HOURS</h5>
        </div>
      </Col>
      <Col xs={12} md={3} className="d-flex flex-column flex-md-row justify-content-center text-center text-md-start align-items-center">
        <FontAwesomeIcon icon={faArrowsRotate} size="4x" />
        <div className="response ms-2 mt-3 mt-md-0">
          <h5>FREE RETURN</h5>
          <h5 className="text-muted">Within 30 days returns</h5>
        </div>
      </Col>
      <Col xs={12} md={3} className="d-flex flex-column flex-md-row justify-content-center text-center text-md-start align-items-center">
        <FontAwesomeIcon icon={faShieldHalved} size="4x" />
        <div className="response ms-2 mt-3 mt-md-0">
          <h5>SECURE PAYMENT</h5>
          <h5 className="text-muted">100% secure payment</h5>
        </div>
      </Col>
      <Col xs={12} md={3} className="d-flex flex-column flex-md-row justify-content-center text-center text-md-start align-items-center">
        <FontAwesomeIcon icon={faClock} size="4x" />
        <div className="response ms-2 mt-3 mt-md-0">
          <h5>BEST PRICE</h5>
          <h5 className="text-muted">Guaranteed price</h5>
        </div>
      </Col>
    </Row>
  );
};

export default SingleService;
