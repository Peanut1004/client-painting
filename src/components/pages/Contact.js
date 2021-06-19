import React from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import ContactUsChild from '../contactUs/ContactUsChild';

const PuttyList = () => {
  return (
    <div className="contact-page">
      <Header />
      <div className="main">
        <ContactUsChild />
      </div>
      <Footer />
    </div>
  );
};
export default PuttyList;