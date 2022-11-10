import React from 'react';

// IMPORT REACT BOOTSTRAP
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// IMPORT FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CardProduct = () => {
  return (
    <Row className="mt-5">
      <Col xs={6} md={2}>
        <Card className="cardProduct" style={{ width: '13rem' }}>
          <Card.Img variant="top" src="https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/4/11/52ceb111-e657-4d6b-af3d-0782cb73739f.jpg.webp?ect=4g" className="img-fluid" style={{ borderRadius: '15px' }} />
          <Card.Body>
            <Card.Text>
              <div className="namaProduct lh-sm">Single i7s TWS Wireless Super Music - Headset Bluetooth i7S TWS PRO aksmdasmdlkasdk</div>
            </Card.Text>
            <div className="taggedProduct">
              <Badge bg="warning">Terlaris</Badge>
            </div>
            <Card.Title>
              <div className="priceProduct mt-3">
                <p className="fw-bold fs-6" style={{ color: '#f58220' }}>
                  Rp 25.000
                </p>
              </div>
            </Card.Title>
            <div className="iconStart">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="tambahKeranjang mt-2">
              <span className="fw-bold text-muted fs-6">Tambah Keranjang</span>
              <FontAwesomeIcon icon={faCartShopping} className="float-end" />
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} md={2}>
        <Card className="cardProduct" style={{ width: '13rem' }}>
          <Card.Img variant="top" src="https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/4/11/52ceb111-e657-4d6b-af3d-0782cb73739f.jpg.webp?ect=4g" className="img-fluid" style={{ borderRadius: '15px' }} />
          <Card.Body>
            <Card.Text>
              <div className="namaProduct lh-sm">Single i7s TWS Wireless Super Music - Headset Bluetooth i7S TWS PRO aksmdasmdlkasdk</div>
            </Card.Text>
            <div className="taggedProduct">
              <span className="badge bg-warning">Terlaris</span>
              <span className="badge fw-bold bg-success float-end">Tebaru</span>
            </div>
            <Card.Title>
              <div className="priceProduct mt-3">
                <p className="fw-bold fs-6" style={{ color: '#f58220' }}>
                  Rp 25.000
                </p>
              </div>
            </Card.Title>
            <div className="iconStart">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="tambahKeranjang mt-2">
              <span className="fw-bold text-muted fs-6">Tambah Keranjang</span>
              <FontAwesomeIcon icon={faCartShopping} className="float-end" />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default CardProduct;
