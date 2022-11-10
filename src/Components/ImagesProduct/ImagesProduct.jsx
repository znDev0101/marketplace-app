import React from 'react';

// IMPORT REACT BOOTSTRAP
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ImagesProduct = () => {
  return (
    <>
      <Row className="mt-5 gy-2 py-2">
        <Col xs={12} md={6}>
          <img src="https://www.kitakirim.id/assets/images/home/promo1.jpg" alt="product" className="img-fluid rounded" />
        </Col>
        <Col xs={12} md={6}>
          <img src="https://www.kitakirim.id/assets/images/home/promo2.jpg" alt="product2" className="img-fluid rounded" />
        </Col>
      </Row>
      <Row className="gy-2">
        <Col xs={12} md={6}>
          <img src="https://www.kitakirim.id/assets/images/home/promo3.jpg" alt="product3" className="img-fluid rounded" />
        </Col>
        <Col xs={12} md={6}>
          <img src="https://www.kitakirim.id/assets/images/home/promo4.jpg" alt="product4" className="img-fluid rounded" />
        </Col>
      </Row>
    </>
  );
};

export default ImagesProduct;
