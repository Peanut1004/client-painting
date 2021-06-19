import React, { useEffect } from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import { useHistory } from 'react-router-dom';
import WorksDoneDetailChild from '../worksDonedetail/WorksDoneDetailChild';

const WorksDoneDetail = () => {
  const history = useHistory();

  //   useEffect(() => {
  //     const token = localStorage.getItem('token');
  //     if (!token) {
  //       history.push('/login');
  //     }
  //   }, [history]);

  return (
    <div className="worksdone-detail-pages">
      <Header />
      <div className="main">
        <WorksDoneDetailChild />
      </div>
      <Footer />
    </div>
  );
};
export default WorksDoneDetail;
