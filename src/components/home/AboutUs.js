import React from 'react';
import { useTranslation } from 'react-i18next';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container } from 'react-bootstrap';

function AboutUs() {
  const { t } = useTranslation('common');
  return (
    <div className="about-us">
      <div className="container">
        <div className="title-section text-center">
          <h2 className="flat-title color-one">{t('titleSection.aboutUs')}</h2>
          <p>Description</p>
        </div>
        <div className="row about-us__content">
          <div className="col-lg-6 col-12">
            <div className="about-us__text">
              <h3>{t('aboutUsSection.companyName')}</h3>
              <p>{t('aboutUsSection.companyDes')}</p>

              <ul>
                <li>
                  <span>{t('aboutUsSection.companyHotline')}:</span> 036 2807
                  834
                </li>
                <li>
                  <span>{t('aboutUsSection.companyAddress')}:</span> 65/1 TDP3,
                  thị trấn Châu Ổ, huyện Bình Sơn, tỉnh Quảng Ngãi
                </li>
                <li>
                  <span>Email:</span> Email.com
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="about-us__video">
              <iframe
                width="100%"
                height="340px"
                src="https://www.youtube.com/embed/Eceu6NCCQjo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="image-position">
        <img src="../assets/images/section/09.png" alt="images" />
      </div>
    </div>
  );
}
export default AboutUs;
