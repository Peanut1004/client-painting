import React from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import PuttyListChild from '../puttyList/PuttyListChild';

const PuttyList = () => {
  return (
    <div className="interior-paint-grid-page">
      <Header />
      <div className="main">
        <PuttyListChild />
      </div>
      <Footer />
    </div>
  );
};
export default PuttyList;
