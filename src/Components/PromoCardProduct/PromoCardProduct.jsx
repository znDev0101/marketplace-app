import React from 'react';
// IMPORT REACT BOOTSTRAP
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// IMPORT REACT ROUTER
import { Link } from 'react-router-dom';

const PromoCardProduct = () => {
  return (
    <Row className="mt-5 gx-5">
      <h3 className="text-center">Promo Product</h3>
      <Col xs={2}>
        <Card className="cardPromoProduct mt-5" style={{ width: '13rem' }}>
          <Link to="/productDetail/:productId">
            <Card.Img variant="top" src="https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/4/11/52ceb111-e657-4d6b-af3d-0782cb73739f.jpg.webp?ect=4g" className="img-fluid" style={{ borderRadius: '15px' }} />
          </Link>
          <Card.Body>
            <Card.Text>
              <Link to="/productDetail/:productId" className="text-decoration-none">
                <div className="namaProduct lh-sm text-dark">Single i7s TWS Wireless Super Music - Headset Bluetooth i7S TWS PRO aksmdasmdlkasdk</div>
              </Link>
            </Card.Text>
            <Card.Title>
              <Link to="/productDetail/:productId" className="text-decoration-none">
                <div className="priceProduct mt-3">
                  <p className="fw-bold fs-6 text-dark">Rp 0</p>
                </div>
              </Link>
            </Card.Title>
            <Card.Text>
              <Link to="/productDetail/:productId" className="text-decoration-none">
                <div className="promoPrice d-flex align-items-center">
                  <p className="badge p-1 fw-bold" style={{ backgroundColor: '#ffdbe2', color: '#f94d63' }}>
                    100%
                  </p>
                  <p className="ms-2 text-muted text-decoration-line-through fw-bold" style={{ fontSize: '0.8rem' }}>
                    Rp 35.000
                  </p>
                </div>
                <div className="locationProduct">
                  <span className="text-dark fw-bold text-muted">Jakarta Selatan</span>
                </div>
              </Link>
            </Card.Text>
            <div className="progressContent rounded">
              <div className="progress bg-danger" style={{ width: '90%', height: '5px' }}></div>
            </div>
            <span className="fw-bold text-muted" style={{ fontSize: '0.8rem' }}>
              Segera habis
            </span>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={2}>
        <Card className="promoCard mt-5" style={{ width: '13rem' }}>
          <Link to="/">
            <Card.Img variant="top" src="https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/4/11/52ceb111-e657-4d6b-af3d-0782cb73739f.jpg.webp?ect=4g" className="img-fluid" style={{ borderRadius: '15px' }} />
          </Link>
          <Card.Body>
            <Card.Text>
              <Link to="/" className="text-decoration-none">
                <div className="namaProduct lh-sm text-dark">Single i7s TWS Wireless Super Music - Headset Bluetooth i7S TWS PRO aksmdasmdlkasdk</div>
              </Link>
            </Card.Text>
            <Card.Title>
              <Link to="/" className="text-decoration-none">
                <div className="priceProduct mt-3">
                  <p className="fw-bold fs-6 text-dark">Rp 0</p>
                </div>
              </Link>
            </Card.Title>
            <Card.Text>
              <Link to="/" className="text-decoration-none">
                <div className="promoPrice d-flex align-items-center">
                  <p className="badge p-1 fw-bold" style={{ backgroundColor: '#ffdbe2', color: '#f94d63' }}>
                    100%
                  </p>
                  <p className="ms-2 text-muted text-decoration-line-through fw-bold" style={{ fontSize: '0.8rem' }}>
                    Rp 35.000
                  </p>
                </div>
                <div className="locationProduct">
                  <span className="text-dark fw-bold text-muted">Jakarta Selatan</span>
                </div>
              </Link>
            </Card.Text>
            <div className="progressContent rounded">
              <div className="progress bg-danger" style={{ width: '90%', height: '5px' }}></div>
            </div>
            <span className="fw-bold text-muted" style={{ fontSize: '0.8rem' }}>
              Segera habis
            </span>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={2}>
        <Card className="promoCard mt-5" style={{ width: '13rem' }}>
          <Link to="/">
            <Card.Img variant="top" src="https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/4/11/52ceb111-e657-4d6b-af3d-0782cb73739f.jpg.webp?ect=4g" className="img-fluid" style={{ borderRadius: '15px' }} />
          </Link>
          <Card.Body>
            <Card.Text>
              <Link to="/" className="text-decoration-none">
                <div className="namaProduct lh-sm text-dark">Single i7s TWS Wireless Super Music - Headset Bluetooth i7S TWS PRO aksmdasmdlkasdk</div>
              </Link>
            </Card.Text>
            <Card.Title>
              <Link to="/" className="text-decoration-none">
                <div className="priceProduct mt-3">
                  <p className="fw-bold fs-6 text-dark">Rp 0</p>
                </div>
              </Link>
            </Card.Title>
            <Card.Text>
              <Link to="/" className="text-decoration-none">
                <div className="promoPrice d-flex align-items-center">
                  <p className="badge p-1 fw-bold" style={{ backgroundColor: '#ffdbe2', color: '#f94d63' }}>
                    100%
                  </p>
                  <p className="ms-2 text-muted text-decoration-line-through fw-bold" style={{ fontSize: '0.8rem' }}>
                    Rp 35.000
                  </p>
                </div>
                <div className="locationProduct">
                  <span className="text-dark fw-bold text-muted">Jakarta Selatan</span>
                </div>
              </Link>
            </Card.Text>
            <div className="progressContent rounded">
              <div className="progress bg-danger" style={{ width: '90%', height: '5px' }}></div>
            </div>
            <span className="fw-bold text-muted" style={{ fontSize: '0.8rem' }}>
              Segera habis
            </span>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={2}>
        <Card className="promoCard mt-5" style={{ width: '13rem' }}>
          <Link to="/">
            <Card.Img variant="top" src="https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/4/11/52ceb111-e657-4d6b-af3d-0782cb73739f.jpg.webp?ect=4g" className="img-fluid" style={{ borderRadius: '15px' }} />
          </Link>
          <Card.Body>
            <Card.Text>
              <Link to="/" className="text-decoration-none">
                <div className="namaProduct lh-sm text-dark">Single i7s TWS Wireless Super Music - Headset Bluetooth i7S TWS PRO aksmdasmdlkasdk</div>
              </Link>
            </Card.Text>
            <Card.Title>
              <Link to="/" className="text-decoration-none">
                <div className="priceProduct mt-3">
                  <p className="fw-bold fs-6 text-dark">Rp 0</p>
                </div>
              </Link>
            </Card.Title>
            <Card.Text>
              <Link to="/" className="text-decoration-none">
                <div className="promoPrice d-flex align-items-center">
                  <p className="badge p-1 fw-bold" style={{ backgroundColor: '#ffdbe2', color: '#f94d63' }}>
                    100%
                  </p>
                  <p className="ms-2 text-muted text-decoration-line-through fw-bold" style={{ fontSize: '0.8rem' }}>
                    Rp 35.000
                  </p>
                </div>
                <div className="locationProduct">
                  <span className="text-dark fw-bold text-muted">Jakarta Selatan</span>
                </div>
              </Link>
            </Card.Text>
            <div className="progressContent rounded">
              <div className="progress bg-danger" style={{ width: '90%', height: '5px' }}></div>
            </div>
            <span className="fw-bold text-muted" style={{ fontSize: '0.8rem' }}>
              Segera habis
            </span>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={2}>
        <Card className="promoCard mt-5" style={{ width: '13rem' }}>
          <Link to="/">
            <Card.Img variant="top" src="https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/4/11/52ceb111-e657-4d6b-af3d-0782cb73739f.jpg.webp?ect=4g" className="img-fluid" style={{ borderRadius: '15px' }} />
          </Link>
          <Card.Body>
            <Card.Text>
              <Link to="/" className="text-decoration-none">
                <div className="namaProduct lh-sm text-dark">Single i7s TWS Wireless Super Music - Headset Bluetooth i7S TWS PRO aksmdasmdlkasdk</div>
              </Link>
            </Card.Text>
            <Card.Title>
              <Link to="/" className="text-decoration-none">
                <div className="priceProduct mt-3">
                  <p className="fw-bold fs-6 text-dark">Rp 0</p>
                </div>
              </Link>
            </Card.Title>
            <Card.Text>
              <Link to="/" className="text-decoration-none">
                <div className="promoPrice d-flex align-items-center">
                  <p className="badge p-1 fw-bold" style={{ backgroundColor: '#ffdbe2', color: '#f94d63' }}>
                    100%
                  </p>
                  <p className="ms-2 text-muted text-decoration-line-through fw-bold" style={{ fontSize: '0.8rem' }}>
                    Rp 35.000
                  </p>
                </div>
                <div className="locationProduct">
                  <span className="text-dark fw-bold text-muted">Jakarta Selatan</span>
                </div>
              </Link>
            </Card.Text>
            <div className="progressContent rounded">
              <div className="progress bg-danger" style={{ width: '90%', height: '5px' }}></div>
            </div>
            <span className="fw-bold text-muted" style={{ fontSize: '0.8rem' }}>
              Segera habis
            </span>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={2}>
        <Card className="promoCard mt-5" style={{ width: '13rem' }}>
          <Link to="/">
            <Card.Img variant="top" src="https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/4/11/52ceb111-e657-4d6b-af3d-0782cb73739f.jpg.webp?ect=4g" className="img-fluid" style={{ borderRadius: '15px' }} />
          </Link>
          <Card.Body>
            <Card.Text>
              <Link to="/" className="text-decoration-none">
                <div className="namaProduct lh-sm text-dark">Single i7s TWS Wireless Super Music - Headset Bluetooth i7S TWS PRO aksmdasmdlkasdk</div>
              </Link>
            </Card.Text>
            <Card.Title>
              <Link to="/" className="text-decoration-none">
                <div className="priceProduct mt-3">
                  <p className="fw-bold fs-6 text-dark">Rp 0</p>
                </div>
              </Link>
            </Card.Title>
            <Card.Text>
              <Link to="/" className="text-decoration-none">
                <div className="promoPrice d-flex align-items-center">
                  <p className="badge p-1 fw-bold" style={{ backgroundColor: '#ffdbe2', color: '#f94d63' }}>
                    100%
                  </p>
                  <p className="ms-2 text-muted text-decoration-line-through fw-bold" style={{ fontSize: '0.8rem' }}>
                    Rp 35.000
                  </p>
                </div>
                <div className="locationProduct">
                  <span className="text-dark fw-bold text-muted">Jakarta Selatan</span>
                </div>
              </Link>
            </Card.Text>
            <div className="progressContent rounded">
              <div className="progress bg-danger" style={{ width: '90%', height: '5px' }}></div>
            </div>
            <span className="fw-bold text-muted" style={{ fontSize: '0.8rem' }}>
              Segera habis
            </span>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default PromoCardProduct;
