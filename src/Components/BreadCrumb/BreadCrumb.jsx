import React from 'react';

// IMPORT REACT ROUTER
import { Link } from 'react-router-dom';

const BreadCrumb = () => {
  return (
    <nav aria-label="breadcrumb bg-secondary" className="mt-md-5 mt-4 ms-md-5">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/" className="text-decoration-none">
            Home
          </Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/" className="text-decoration-none">
            Category
          </Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          <Link to="/" className="text-decoration-none">
            Earphone
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumb;
