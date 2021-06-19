import React, { useEffect } from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import BlogDetailChild from '../blogDetail/BlogDetailChild';
import { useHistory } from 'react-router-dom';

const BlogDetail = () => {
  const history = useHistory();

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     history.push('/login');
  //   }
  // }, [history]);

  return (
    <div className="blog-detail-pages">
      <Header />
      <div className="main">
        <BlogDetailChild />
      </div>
      <Footer />
    </div>
  );
};
export default BlogDetail;
