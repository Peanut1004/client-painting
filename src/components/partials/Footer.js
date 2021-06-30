import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <div className="footer-section">
      {/* <div className="image-footer-before">
        <img src="../assets/images/footer/01.png" alt="images" />
      </div> */}
      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="widget__columns">
                  <div className="widget__logo">
                    <Link to="/" title="Logo">
                      <img src="../assets/images/logo/02.png" alt="images" />
                    </Link>
                  </div>
                  <div className="widget__info-company">
                    <ul>
                      <li>
                        <div className="text paint">
                          {t('widget.professional')}
                        </div>
                      </li>
                      <li>
                        <div className="text phone">
                          {t('widget.hotline')}: 036 2807 834
                        </div>
                      </li>
                      <li>
                        <div className="text address">
                          {t('widget.address')}: 65/1 TDP3, thị trấn Châu Ổ,
                          huyện Bình Sơn, tỉnh Quảng Ngãi
                        </div>
                      </li>
                      <li>
                        <div className="text email">Email: email.com</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="widget__columns">
                  <h3 className="widget__title">{t('widget.contactTitle')}</h3>
                  <ul className="widget__menu">
                    <li>
                      <Link to="/" className="widget__menu--link">
                        {t('widget.contactUs')}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="widget__columns">
                  <h3 className="widget__title">{t('widget.supportTitle')}</h3>
                  <ul className="widget__menu">
                    <li>
                      <Link to="/" className="widget__menu--link">
                        {t('widget.support&Faqs')}
                      </Link>
                    </li>
                    <li>
                      <Link to="/login" className="widget__menu--link">
                        Admin
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="widget__columns">
                  <h3 className="widget__title">{t('widget.connectWithUs')}</h3>
                  <div className="widget__list-social">
                    <a href="https://www.facebook.com/sonphaporne76/?notif_id=1623229824503212&notif_t=page_invite_accept&ref=notif">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-skype" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom text-center">
          <h4 className="bottom__name">Đông Thịnh</h4>
        </div>
      </footer>
      {/* <div className="image-footer-before">
        <img src="../assets/images/footer/02.png" alt="images" />
      </div> */}
    </div>
  );
};

export default Footer;
