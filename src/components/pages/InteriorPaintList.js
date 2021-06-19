import React from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import InteriorPaintListChild from '../interiorPaintList/InteriorPaintListChild';

const InteriorPaintList = () => {
  return (
    <div className="interior-paint-grid-page">
      <Header />
      <div className="main">
        <InteriorPaintListChild />
      </div>
      <Footer />
    </div>
  );
};
export default InteriorPaintList;
