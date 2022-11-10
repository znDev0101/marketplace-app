import React from 'react';

// IMPORT REACT BOOTSTRAP
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// IMPORT REACT ROUTER
import { Link } from 'react-router-dom';
import SingleService from '../../Components/SingleService/SingleService';
import Footer from '../../Components/Footer/Footer';
import Copyright from '../../Components/Copyright/Copyright';

const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Row className="mt-5 justify-content-center justify-content-md-start align-items-center">
        <Col xs={12} md={6} className="text-center d-none d-md-block">
          <img src="https://www.kitakirim.id/icon_kk.png" alt="logo-banner" className="img-fluid" width={350} />
          <h3 className="mt-4 fw-bold" style={{ color: '#4c4c4c' }}>
            Jual Beli Kirim Mudah Hanya di KitaKirim
          </h3>
          <p className="fst-normal">Banyak Bertambah Manfaat bertransaksi di KitaKirim</p>
        </Col>
        <Col xs={12} md={6} className="border rounded signUpContent text-center p-4 p-md-5 ms-md-5">
          <h3 className="fw-bold" style={{ color: '#4c4c4c' }}>
            Daftar Sekarang
          </h3>
          <span className="fw-light fs-5">Sudah punya akun KitaKirim? </span>
          <Link to="/signin" className="text-decoration-none text-danger fw-bold">
            Masuk
          </Link>
          {/* FORM SIGN UP */}
          <Form onSubmit={handleSubmit} method="post" className="text-start mt-4">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold text-secondary">Email</Form.Label>
              <Form.Control type="email" className="inputSign" />
              <Form.Text className="text-muted">Contoh: email@kitakirim.id</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="telp">
              <Form.Label className="fw-bold text-secondary">Telepon</Form.Label>
              <Form.Control type="telp" className="inputSign" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label className="fw-bold text-secondary">Buat Baru Kata Kunci</Form.Label>
              <Form.Control type="password" className="inputSign" />
            </Form.Group>
            <div className="d-grid">
              <Button type="submit" className="fw-bold rounded border border-none bg-danger text-white py-2 fs-5">
                Daftar
              </Button>
            </div>
          </Form>
          <div className="mt-3 text-muted">Dengan mendaftar, saya menyetujui</div>
          <Link to="/" className="text-decoration-none text-danger">
            Syarat dan Ketentuan
          </Link>
          <span className="ms-1">Serta</span>
          <Link to="/" className="text-decoration-none text-danger ms-1">
            Kebijakan Privasi
          </Link>
        </Col>
      </Row>
      <SingleService />
      <Footer />
      <Copyright />
    </>
  );
};

export default SignUp;
