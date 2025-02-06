import React from 'react';
import './not-found.scss';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">Oops! The page you're looking for doesn't exist.</p>
        <Link href="/" className="not-found-button">Go Home</Link>
      </div>
    </div>
  );
};

export default NotFound;