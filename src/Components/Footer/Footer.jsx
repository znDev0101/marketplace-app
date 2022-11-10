import React from 'react';

// IMPORT FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

// IMPORT REACT BOOTSTRAP
import { Row, Col } from 'react-bootstrap';

// IMPORT REACT ROUTER
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Row className="p-md-5 p-3" style={{ backgroundColor: '#8a031f' }}>
      <Col xs={12} md={3} className="aboutFooter text-start text-white">
        <img src="https://www.kitakirim.id/assets/images/icon/icon_kk.png" alt="logo-banner" className="img-fluid" width={100} />
        <p className=" mt-3">Kita Kirim Online buying and selling site.</p>
        <p className="fw-bold">
          Contact Us <br />
          <span>
            <Link to="tel:6281294741463" className="text-decoration-none text-white fw-bold">
              +6281294741463 (CS)
            </Link>
          </span>{' '}
        </p>
      </Col>
      <Col xs={12} md={3} className="text-start informationFooter text-white mt-4 mt-md-0">
        <h4 className="fw-bold">Information</h4>
        <ul>
          <li>
            <Link to="/" className="text-decoration-none  text-white">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/" className="text-decoration-none text-white">
              Faq
            </Link>
          </li>
          <li>
            <Link to="/" className="text-decoration-none text-white">
              Term & Condition
            </Link>
          </li>
          <li>
            <Link to="/" className="text-decoration-none text-white">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/" className="text-decoration-none text-white">
              Help
            </Link>
          </li>
        </ul>
      </Col>
      <Col xs={12} md={3} className="text-start customerFooter text-white mt-4 mt-md-0">
        <h4 className="fw-bold">Customer Service</h4>
        <ul>
          <li>
            <Link to="/" className="text-decoration-none text-white">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/" className="text-decoration-none text-white">
              Faq
            </Link>
          </li>
          <li>
            <Link to="/" className="text-decoration-none text-white">
              Term & Condition
            </Link>
          </li>
          <li>
            <Link to="/" className="text-decoration-none text-white">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/" className="text-decoration-none text-white">
              Help
            </Link>
          </li>
        </ul>
      </Col>
      <Col xs={12} md={3} className="contactFooter text-white mt-4 mt-md-0">
        <h4 className="fw-bold">Contact</h4>
        <div>Head Office : </div>
        <div>Revenue Tower lt. 27 No. 123</div>
        <div>Jl. Jendral Sudirman No 52 − 53</div>
        <div>RT. 5/RW. 3</div>
        <div>Senayan, Jakarta Selatan, DKI Jakarta.</div>
        <div>12190</div>
        <ul className="d-flex justify-content-start">
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </li>
        </ul>
      </Col>
    </Row>
  );
};

export default Footer;
