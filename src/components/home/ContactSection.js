import React from 'react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  return (
    <div className="container">
      <div className="contact-section">
        <div className="contact__social-info">
          <ul>
            <li>
              <div>
                <a href="#">
                  <i className="fas fa-phone-alt"></i>
                </a>
                <p>036 2807 834</p>
              </div>
            </li>
            <li>
              <div>
                <a href="https://www.facebook.com/sonphaporne76/?notif_id=1623229824503212&notif_t=page_invite_accept&ref=notif">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <p>fb.com</p>
              </div>
            </li>
            <li>
              <div>
                <a href="#">
                  <i className="far fa-envelope"></i>
                </a>
                <p>gmail.com</p>
              </div>
            </li>
            <li>
              <div>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <p>instagram</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
