import React from 'react';

// IMPORT REACT BOOTSTRAP
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// IMPORT REACT ROUTER
import { Link } from 'react-router-dom';

const Copyright = () => {
  return (
    <Row className="justify-content-between align-items-center p-4">
      <Col xs={6} className="text-start">
        <p>
          @ 2022
          <span>
            <Link to="/" className="text-decoration-none ms-2">
              PT Satria Teknologi Performa
            </Link>
          </span>
        </p>
      </Col>
      <Col xs={6} className="text-end">
        <img src="https://www.kitakirim.id/assets/images/icon/stp_logo.png" alt="logo" className="img-fluid" width="70" />
      </Col>
    </Row>
  );
};

export default Copyright;
