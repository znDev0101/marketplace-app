import React from 'react';

// IMPORT COMPONENT
import SingleService from '../../Components/SingleService/SingleService';
import Footer from '../../Components/Footer/Footer';
import Copyright from '../../Components/Copyright/Copyright';

// IMPORT REACT ROUTER
import { Link } from 'react-router-dom';

// IMPORT REACT BOOTSTRAP
import { Row, Col, Form, Button } from 'react-bootstrap';

const SignIn = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Row className="mt-5 justify-content-center justify-content-md-start align-items-center gx-5">
        <Col xs={12} md={6} className="text-center d-none d-md-block">
          <img src="https://www.kitakirim.id/icon_kk.png" alt="logo-banner" className="img-fluid" width={350} />
          <h3 className="mt-4 fw-bold" style={{ color: '#4c4c4c' }}>
            Jual Beli Kirim Mudah Hanya di KitaKirim
          </h3>
          <p className="fst-normal">Banyak Bertambah Manfaat bertransaksi di KitaKirim</p>
        </Col>
        <Col xs={12} md={6} className="border rounded signInContent text-center p-4 p-md-5 ms-md-5">
          <h2 className="text-start fw-bold text-dark text-opacity-75">SIGN IN</h2>
          {/* FORM SIGN UP */}
          <Form onSubmit={handleSubmit} method="post" className="text-start mt-4">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold text-secondary">Email</Form.Label>
              <Form.Control type="email" className="inputSign" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label className="fw-bold text-secondary">Password</Form.Label>
              <Form.Control type="password" className="inputSign" />
            </Form.Group>
            <div className="d-grid">
              <Button type="submit" className="fw-bold rounded border border-none bg-danger text-white py-2 fs-5">
                Login
              </Button>
            </div>
          </Form>
          <div className="mt-4">
            Baru dikitaKirim?{' '}
            <Link to="/signup" className="text-decoration-none text-danger fw-bold">
              <span>Daftar</span>
            </Link>
          </div>
        </Col>
      </Row>
      <SingleService />
      <Footer />
      <Copyright />
    </>
  );
};

export default SignIn;
