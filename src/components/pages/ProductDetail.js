import React, { useEffect } from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import ProductDetailChild from '../productdetail/ProductDetailChild';
import { useHistory } from 'react-router-dom';

const ProductDetail = () => {
  const history = useHistory();

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     history.push('/login');
  //   }
  // }, [history]);

  return (
    <div className="product-detail-pages">
      <Header />
      <div className="main">
        <ProductDetailChild />
      </div>
      <Footer />
    </div>
  );
};
export default ProductDetail;
