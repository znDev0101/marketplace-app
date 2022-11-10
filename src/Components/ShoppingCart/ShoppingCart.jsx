import React, { useState } from 'react';

// IMPORT FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className="position-relative px-md-2 me-3 shoppingCart rounded" onMouseEnter={() => setDropDown(true)} onMouseLeave={() => setDropDown(false)}>
      <div className="iconShoppingCart p-2">
        <FontAwesomeIcon icon={faCartShopping} size="lg" style={{ color: '#7f848e' }} />
        <div className="badge bg-danger rounded-pill text-wrap position-absolute fw-bold" style={{ top: '0', right: '-3px' }}>
          1
        </div>
      </div>
      {/* DROPDOWN */}
      {dropDown && (
        <div className="shoppingItems position-absolute p-4 rounded shadow">
          <div>2678960640580202</div>
          <hr />
          <div className="d-flex justify-content-between fw-bold mt-4">
            <div>Barang</div>
            <div>0</div>
          </div>
          <div className="d-flex justify-content-between fw-bold mt-2">
            <div>Total</div>
            <div>0</div>
          </div>
          <div className="totalShoppingCart d-flex justify-content-between mt-4">
            <Link to="/" className="text-decoration-none btn rounded text-white">
              Cart
            </Link>
            <Link to="/" className="text-decoration-none btn rounded text-white">
              CheckOut
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
