import React from 'react';
import { Link } from 'react-router-dom';

function BestChooseIconBox() {
  return (
    <div className="bestchoose">
      <div className="container">
        <div className="title-section text-center">
          <h2 className="flat-title color-one">Về chúng tôi</h2>
          <p>Praesent ut ligula non mi curabitur at lacus elit</p>
        </div>
        <div className="bestchoose__grid">
          <div className="bestchoose__iconbox bestchoose-linear-one">
            <div className="bestchoose__iconbox--icon">
              <i className="fas fa-user-tie"></i>
            </div>
            <div className="bestchoose__content ">
              <h3>
                <Link to="/">Chuyên nghiệp</Link>
              </h3>
              <p>
                At our company, we respect the customer’s time and schedule and
                always complete the projects on timely fashion way.
              </p>
            </div>
          </div>
          <div className="bestchoose__iconbox bestchoose-linear-two">
            <div className="bestchoose__iconbox--icon">
              <i className="fas fa-business-time"></i>
            </div>
            <div className="bestchoose__content">
              <h3>
                <Link to="/">Phục vụ 24/7</Link>
              </h3>
              <p>
                At our company, we respect the customer’s time and schedule and
                always complete the projects on timely fashion way.
              </p>
            </div>
          </div>
          <div className="bestchoose__iconbox bestchoose-linear-three">
            <div className="bestchoose__iconbox--icon">
              <i className="fas fa-truck"></i>
            </div>
            <div className="bestchoose__content">
              <h3>
                <Link to="/">Giao hàng đúng hẹn</Link>
              </h3>
              <p>
                At our company, we respect the customer’s time and schedule and
                always complete the projects on timely fashion way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BestChooseIconBox;
