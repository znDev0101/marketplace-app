import React, { useState } from 'react';

// IMPORT REACT BOOTSTRAP
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

// IMPORT FONT AWESOME
import { faStar, faPenToSquare } from '@fortawesome/free-regular-svg-icons';

// IMPORT COMPONENT
import BreadCrumb from '../BreadCrumb/BreadCrumb';

// IMPORT REACT ROUTER
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const DetailProduct = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* COMPONENT BREAD CRUMB */}
      <BreadCrumb />
      {/* END COMPONENT BREAD CRUMB */}
      <Row className="mt-5 justify-content-center">
        {/* IMAGE PRODUCT */}
        <Col xs={12} md={3}>
          <img src="https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/4/11/52ceb111-e657-4d6b-af3d-0782cb73739f.jpg.webp?ect=4g" alt="imageProduct" className="img-fluid" />
          <h4>test</h4>
        </Col>
        {/* DETAIL PRODUCT */}
        <Col xs={12} md={5} className="ms-md-5 ">
          <Link to="/" className="text-decoration-none">
            <h2>Merek Product</h2>
          </Link>
          <div className="detailProduct my-2">
            <h3>Single i7s TWS Wireless Super Music - Headset Bluetooth i7S TWS PRO</h3>
            <span className="text-dark">Terjual</span>
            <span>*</span>
            <span>*</span>
            <span>*</span>
            <span className="mx-2">|</span>
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span>5.0</span>
          </div>
          <div className="hargaProduct fs-2 fw-bold mt-4">Rp 25.000</div>
          {/* TABS */}
          <Tabs defaultActiveKey="description" id="uncontrolled-tab-example" className="mb-3 mt-4">
            <Tab eventKey="description" title="Description">
              Masih baru
            </Tab>
            <Tab eventKey="comments" title="Comments"></Tab>
            <Tab eventKey="raiting" title="Raitings"></Tab>
          </Tabs>
        </Col>
        {/* INPUT ORDER */}
        <Col xs={12} md={3}>
          <Card style={{ width: '20rem' }} className="cardInputOrder py-2">
            <Card.Body>
              <Card.Title>Atur jumlah dan catatan</Card.Title>
              {/* INPUT ORDER */}
              <div className="inputOrder mt-3">
                <button type="button" className="px-2 mx-1 bg-secondary bg-opacity-25">
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <input type="text" value={1} className="text-center" />
                <button type="button" className="px-2 mx-1 bg-secondary bg-opacity-25">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
                <p className="d-inline ms-2 fs-5">
                  Stok : <span className="fw-bold">10</span>
                </p>
              </div>
              {/* END INPUT ORDER */}
              {/* TAMBAH CATATAN */}
              <button type="button" onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open} className="mt-4 bg-transparent button text-danger fw-bold">
                <FontAwesomeIcon icon={faPenToSquare} /> Tambah catatan
              </button>
              <Collapse in={open} className="mt-2 ">
                <div id="example-collapse-text ">
                  <input type="text" style={{ width: '280px' }} className="border border-secondary rounded p-1" placeholder="Contoh Warna: putih , size L" />
                </div>
              </Collapse>
              {/* END TAMBAH CATATAN */}
              {/* SUBTOTAL */}
              <div className="subTotal d-flex justify-content-between mt-4">
                <h4 className="text-muted fw-bold">Subtotal : </h4>
                <h4 className="fw-bold">Rp 25.000 </h4>
              </div>
              {/* END SUBTOTAL */}
              {/* CHECK OUT BUTTON DAN CART BUTTON */}
              <div className="d-flex justify-content-center text-center fw-bold flex-column  mt-5">
                <Link to="/" className="text-decoration-none w-60 p-2  text-white rounded checkOut">
                  Check Out
                </Link>
                <Link to="/" className=" mt-3 text-decoration-none p-2 text-danger border border-danger checkIn rounded">
                  Cart
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default DetailProduct;
