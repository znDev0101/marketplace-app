import React from 'react';

// IMPORT ASSETS
import Categoty from '../../Assets/img/category.png';
import Electronic from '../../Assets/img/responsive.png';
import TopUp from '../../Assets/img/topup.png';
import Travel from '../../Assets/img/travel.png';
import Pets from '../../Assets/img/pets.png';
import Money from '../../Assets/img/money.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// IMPORT REACT BOOTSTRAP
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// IMPORT REACT ROUTER
import { Link } from 'react-router-dom';

const CategoryItems = () => {
  return (
    <Row className="mt-5">
      <Col xs={12} className="d-flex align-items-center">
        <Swiper className="mySwiper " slidesPerView={6} spaceBetween={10}>
          <SwiperSlide className="ms-md-5 ">
            <Link to="/" className="text-decoration-none ">
              <img src={Categoty} alt="category-icon" />
              <span className="text-dark ms-2">Kategori</span>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/" className="text-decoration-none">
              <img src={Electronic} alt="electronic-icon" />
              <span className="text-dark ms-2">Electronic</span>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/" className="text-decoration-none">
              <img src={TopUp} alt="topup-icon" />
              <span className="text-dark ms-2">Top Up & Tagihan</span>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/" className="text-decoration-none">
              <img src={Travel} alt="travel-icon" />
              <span className="text-dark ms-2">Travel & Entertaiment</span>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/" className="text-decoration-none">
              <img src={Pets} alt="pets-icon" />
              <span className="text-dark ms-2">Perawatan Hewan</span>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/" className="text-decoration-none">
              <img src={Money} alt="money-icon" />
              <span className="text-dark ms-2">Keuangan</span>
            </Link>
          </SwiperSlide>
        </Swiper>
      </Col>
    </Row>
  );
};

export default CategoryItems;
