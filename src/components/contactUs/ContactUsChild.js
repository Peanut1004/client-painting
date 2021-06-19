import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function ContactUsChild() {
  const { t } = useTranslation('common');
  return (
    <div className="contact-us">
      <div className="breadcrumbs">
        <div className="breadcrumbs__overlay"></div>
        <div className="container position-relative">
          <div className="breadcrumbs__link">
            <h1>{t('breadcrumbs.contact')}</h1>
            <Link to="/">{t('breadcrumbs.home')}</Link>
            <Link to="/">{t('breadcrumbs.contact')}</Link>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="contact-us__columns">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="contact-us__box">
                <div className="icon">
                  <i className="far fa-envelope"></i>
                </div>
                <h3>{t('contact.emailUs')}</h3>
                <p>email.com</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="contact-us__box">
                <div className="icon">
                  <i className="fas fa-phone-volume"></i>
                </div>
                <h3>{t('contact.callUs')}</h3>
                <p>036 2807 834</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="contact-us__box">
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h3>{t('contact.address')}</h3>
                <p>
                  {' '}
                  65/1 TDP3, thị trấn Châu Ổ, huyện Bình Sơn, tỉnh Quảng Ngãi
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-us__map"></div>
      </div>
    </div>
  );
}
export default ContactUsChild;
