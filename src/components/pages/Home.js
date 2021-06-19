import React from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import Slider from '../home/Slider';
import InteriorPaint from '../home/InteriorPaint';
import ExteriorPaint from '../home/ExteriorPaint';
import Blog from '../home/Blog';
import BestChooseIconBox from '../home/BestChooseIconBox';
import PuttyPaint from '../home/PuttyPaint';
import ServiceBetter from '../home/ServiceBetter';
import ContactSection from '../home/ContactSection';
import WorksDone from '../home/WorksDone';
import AboutUs from '../home/AboutUs';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <div className="main">
        <Slider />
        <AboutUs />
        {/* <BestChooseIconBox /> */}
        <InteriorPaint />
        <ExteriorPaint />
        <ServiceBetter />
        <PuttyPaint />
        <ContactSection />
        <WorksDone />
        <Blog />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
