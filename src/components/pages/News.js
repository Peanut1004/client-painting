import React from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import NewsChild from '../news/NewsChild';

const News = () => {
  return (
    <div className="new-page">
      <Header />
      <div className="main">
        <NewsChild />
      </div>
      <Footer />
    </div>
  );
};
export default News;
