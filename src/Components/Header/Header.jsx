import React from 'react';

// IMPORT COMPONENT
import Search from '../Search/Search';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

// IMPORT REACT ROUTER
import { Link } from 'react-router-dom';

// IMPORT REACT BOOTSTRAP
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

// IMPORT FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAndroid, faBook } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <>
      <header style={{ backgroundColor: '#f8f9fa' }} className="px-3 px-md-4">
        <div className="d-flex justify-content-between iconTopBar py-2">
          <div className="iconDownloadApp mt-3">
            <FontAwesomeIcon icon={faMobileAndroid} className="me-2" />
            <Link to="/" className="text-decoration-none text-dark">
              Download App
            </Link>
          </div>
          <div className="iconPanduan mt-3">
            <Link to="/panduan" className="text-decoration-none text-dark">
              Panduan
            </Link>
            <FontAwesomeIcon icon={faBook} className="ms-2" />
          </div>
        </div>
        <div className="d-flex justify-content-between py-2">
          <div className="changeLanguage">Indonesia</div>
          <div className="signContent">
            <Link to="signin" className="fw-bold signIn p-2 rounded text-white">
              Sign In
            </Link>
            <Link to="signup" className="fw-bold signUp p-2 rounded ms-2">
              Sign Up
            </Link>
          </div>
        </div>
      </header>
      {/* NAVBAR */}
      <Navbar className="d-flex align-items-center shadow sticky-top bg-white">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">
              <img src="https://www.kitakirim.id//assets/images/icon/logo_bannerkk.png" className="img-fluid logoBanner" alt="logo_banner" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="d-felx flex-md-row flex-row-reverse justify-content-md-between">
            <Search />
            <ShoppingCart />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
