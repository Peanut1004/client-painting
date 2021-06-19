import React from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import ExteriorPaintListChild from '../exteriorPaintList/ExteriorPaintListChild';

const ExteriorPaintList = () => {
  return (
    <div className="exterior-paint-grid-page">
      <Header />
      <div className="main">
        <ExteriorPaintListChild />
      </div>
      <Footer />
    </div>
  );
};
export default ExteriorPaintList;
